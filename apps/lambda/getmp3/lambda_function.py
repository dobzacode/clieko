import os
import uuid

import boto3
import yt_dlp

s3_client = boto3.client('s3')

def download_audio(link):
    output_filename = '/tmp/audio.mp3'
    if os.path.exists(output_filename):
        os.remove(output_filename) 
    with yt_dlp.YoutubeDL({'extract_audio': True, 'format': 'bestaudio', 'outtmpl': output_filename}) as video:
        info = video.extract_info(link, download=True)
        track_title = info.get('title') or str(uuid.uuid4())

    print(f"Downloaded track: {track_title}")
    return track_title, output_filename


def upload_to_s3(file_path, bucket_name, object_name):
    try:
        with open(file_path, 'rb') as f:
            s3_client.upload_fileobj(f, bucket_name, object_name)
        print(f"Successfully uploaded {object_name} to {bucket_name}")
        return {
            'success': True
        }
    except Exception as e:
        print(e)
        return {
            'success': False,
            'error': str(e)
        }


def create_presigned_url(bucket_name, object_name, expiration=3600):
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name, 'Key': object_name},
                                                    ExpiresIn=expiration)
        return {
        'success': True,
        'url': response
    }
    except Exception as e:
        print(e)
        return {
            'success': False,
            'error': str(e)
        }
    


def handler(event, context):
    print(event)
    soundcloud_url = event['queryStringParameters']['url']
    try:
        track_title, audio = download_audio(soundcloud_url)
    except Exception as e:
        print(e)
        return {
            'error': str(e)
        }

    unique_key = f"tmp/{track_title}.mp3"
    bucket_name = "doubledrop-prod--eu-central-1-music"

    upload_result = upload_to_s3(audio, bucket_name, unique_key)
    if 'error' in upload_result:
        return upload_result

    presigned_url = create_presigned_url(bucket_name, unique_key)
    if 'error' in presigned_url:
        return presigned_url

    return {
        'presigned_url': presigned_url['url'],
    }

