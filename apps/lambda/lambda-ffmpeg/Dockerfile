FROM python:3.10.0-slim-buster

ENV PYTHON_VERSION=3.10.0
ENV FFMPEG_VERSION=4.3.2

RUN apt-get -y update; apt-get -y install curl

WORKDIR /tmp

RUN mkdir -p /tmp/ffmpeg
WORKDIR /tmp/ffmpeg
RUN ls -l
RUN curl -o ffmpeg-7.0.2-amd64-static.tar.xz https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
RUN tar xf ffmpeg-7.0.2-amd64-static.tar.xz
RUN ls -l
WORKDIR /tmp/ffmpeg/ffmpeg-7.0.2-amd64-static

RUN mkdir -p /opt/bin
RUN ls -l
RUN mv ffmpeg /opt/bin/
RUN mv ffprobe /opt/bin/

WORKDIR /var/task
