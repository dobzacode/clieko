FROM python:3.11.0-slim-buster AS libsndfile-builder

RUN apt-get -y update && apt-get -y install --no-install-recommends \
    curl autoconf autogen automake build-essential libasound2-dev \
    libflac8 libogg-dev libtool libvorbis-dev libopus-dev libmp3lame0 \
    pkg-config libmpg123-0 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /tmp/sndfile

RUN curl -L -o "libsndfile-1.2.2.tar.gz" "https://github.com/libsndfile/libsndfile/archive/refs/tags/1.2.2.tar.gz" && \
    tar xf "libsndfile-1.2.2.tar.gz" && \
    rm "libsndfile-1.2.2.tar.gz"

WORKDIR "/tmp/sndfile/libsndfile-1.2.2"

RUN autoreconf -vif && \
    ./configure --prefix=/var/task && \
    make && \
    make install

FROM public.ecr.aws/lambda/python:3.11

WORKDIR /var/task

RUN yum -y update && yum clean all && \
    yum -y install curl tar xz wget && \
    rm -rf /var/cache/yum

COPY --from=libsndfile-builder /var/task /var/task

RUN mkdir -p /var/task/ffmpeg && \
    cd /var/task/ffmpeg && \
    wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    tar -xvf ffmpeg-release-amd64-static.tar.xz && \
    mv ffmpeg-*-amd64-static/* . && \
    rm -rf ffmpeg-*-amd64-static && \
    rm ffmpeg-release-amd64-static.tar.xz

ENV PATH="/var/task/ffmpeg:${PATH}"

RUN chmod -R +x /var/task/ffmpeg

COPY requirements.txt ${LAMBDA_TASK_ROOT}

RUN pip install --no-cache-dir -r requirements.txt

ENV NUMBA_CACHE_DIR="/tmp"
ENV HOME="/tmp"


COPY lambda_function.py ${LAMBDA_TASK_ROOT}

CMD [ "lambda_function.handler" ]