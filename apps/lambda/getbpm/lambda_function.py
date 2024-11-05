




import json

import boto3
import librosa
import pg8000

ssm_client = boto3.client('ssm')

def get_db_credentials():
    params = ssm_client.get_parameters_by_path(
        Path='/prod/doubledrop/',
        WithDecryption=True
    )
    creds = {param['Name'].split('/')[-1]: param['Value'] for param in params['Parameters']}
    return creds

db_creds = get_db_credentials()

conn = pg8000.connect(
    database=db_creds['DATABASE'],
    user=db_creds['USERNAME'],
    password=db_creds['PASSWORD'],
    host=db_creds['HOST'],
)

cursor = conn.cursor()

def extract_s3_key(event):
    record = event['Records'][0]
    body = json.loads(record['body'])
    s3_event = body['Records'][0]['s3']
    s3_key = s3_event['object']['key']
    return s3_key

def download_audio_from_s3(s3_key):
    tmp_file_path = '/tmp/audio.mp3'
    s3_client = boto3.client('s3')
    bucket_name = "doubledrop-prod--eu-central-1-music"

    try:
        with open(tmp_file_path, 'wb') as f:
            s3_client.download_fileobj(bucket_name, s3_key, f)
        return tmp_file_path
    except Exception as e:
        return {
            'error': str(e)
        }

def add_record_to_db(s3_key, bpm):
    try:
        cursor.execute(
            "INSERT INTO tracks (s3_key, bpm) VALUES (%s, %s)",
            (s3_key, bpm)
        )
        conn.commit()
    except Exception as e:
        return {'db_error': str(e)}
    finally:
        cursor.close()
        conn.close()

def handler(event, context):
    s3_key = extract_s3_key(event)
    audio_file_result = download_audio_from_s3(s3_key)

    if isinstance(audio_file_result, dict) and 'error' in audio_file_result:
        return audio_file_result

    audio_file = audio_file_result
    try:
        y, sr = librosa.load(audio_file)
        onset_env = librosa.onset.onset_strength(y=y, sr=sr)
        tempo = librosa.feature.tempo(onset_envelope=onset_env, sr=sr)

        add_result = add_record_to_db(s3_key, tempo[0])
        if add_result:
            return add_result

        return {"tempo": tempo.tolist()}
    except Exception as e:
        return {'error': str(e)}
        

