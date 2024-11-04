import uuid

import boto3
import yt_dlp


def download_audio(link):
    output_filename = '/tmp/audio.mp3'  # Save to /tmp directory
    with yt_dlp.YoutubeDL({'extract_audio': True, 'format': 'bestaudio', 'outtmpl': output_filename}) as video:
        video.extract_info(link, download=True)
        
        print(output_filename)
        print("Successfully Downloaded")
        return output_filename

def upload_to_s3(file_path, bucket_name, object_name):
    s3_client = boto3.client('s3')
    try:
        with open(file_path, 'rb') as f:
            s3_client.upload_fileobj(f, bucket_name, object_name)
        print(f"Successfully uploaded {object_name} to {bucket_name}")
        return {
            'file_url': f"https://{bucket_name}.s3.amazonaws.com/{object_name}"
        }
    except Exception as e:
        print(e)
        return {
            'error': str(e)
        }

def handler(event, context):
    soundcloud_url = event['url']
    try:
        audio = download_audio(soundcloud_url)
    except Exception as e:
        print(e)
        return {
            'error': str(e)
        }
        
    unique_key = str(uuid.uuid4()) + ".mp3"
    
    bucket_name = "doubledrop-prod--eu-central-1-music"
    
    result = upload_to_s3(audio, bucket_name, unique_key)
    
    return result

