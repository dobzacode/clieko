


import logging

import boto3
import librosa

# Configure logging
logging.basicConfig(level=logging.INFO)

def download_audio_from_s3(s3_key):
    tmp_file_path = '/tmp/audio.mp3'
    s3_client = boto3.client('s3')
    bucket_name = "doubledrop-prod--eu-central-1-music"

    try:
        with open(tmp_file_path, 'wb') as f:
            s3_client.download_fileobj(bucket_name, s3_key, f)
        logging.info("Successfully downloaded audio from S3")
        return tmp_file_path
    except Exception as e:
        logging.error(f"Error downloading audio from S3: {e}")
        raise e

def handler(event, context):
    s3_key = event['s3_key']
    logging.info(f"Received event with s3_key: {s3_key}")
    try:
        audio_file = download_audio_from_s3(s3_key)
    except Exception as e:
        logging.error(f"Error in handler: {e}")
        return {
            'error': str(e)
        }

    y, sr = librosa.load(audio_file)
    logging.info("Audio file loaded successfully")
    tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr, units='time')

    logging.info(f"Tempo: {tempo}, Beat frames calculated")
    return {
        "tempo": tempo.tolist(),
        "beat_frames": beat_frames.tolist()
    }

