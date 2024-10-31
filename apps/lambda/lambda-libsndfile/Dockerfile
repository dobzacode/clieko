FROM python:3.11.0-slim-buster

ENV PYTHON_VERSION=3.11.0
ENV SNDFILE_VERSION=1.2.2

RUN apt-get -y update; apt-get -y install curl

WORKDIR /tmp

RUN mkdir -p "/tmp/sndfile"

RUN apt -y install autoconf autogen automake build-essential libasound2-dev \
    libflac8 libogg-dev libtool libvorbis-dev libopus-dev libmp3lame0 \
    pkg-config libmpg123-0  

WORKDIR "/tmp/sndfile"

RUN curl -L -o "libsndfile-1.2.2.tar.gz" "https://github.com/libsndfile/libsndfile/archive/refs/tags/1.2.2.tar.gz"

RUN tar xf "libsndfile-1.2.2.tar.gz"

WORKDIR "/tmp/sndfile/libsndfile-1.2.2"

RUN autoreconf -vif
RUN ./configure --prefix=/opt/
RUN make
RUN make install

# set workdir back
WORKDIR /var/task