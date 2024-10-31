

import librosa
import yt_dlp


def download_audio(link):
    output_filename = '/tmp/audio.mp3'  # Save to /tmp directory
    with yt_dlp.YoutubeDL({'extract_audio': True, 'format': 'bestaudio', 'outtmpl': output_filename}) as video:
        video.extract_info(link, download=True)
        
        print(output_filename)
        print("Successfully Downloaded")
        return output_filename

def lambda_handler(event, context):
    soundcloud_url = event['url']
    try:
        audio = download_audio(soundcloud_url)
    except Exception as e:
        print(e)
        return {
            'error': str(e)
        }
    
    y, sr = librosa.load(audio)
    print("load")
    tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr, units='time')

    return {
        "tempo": tempo.tolist(),
        "beat_frames": beat_frames.tolist()
}

