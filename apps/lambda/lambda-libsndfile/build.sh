#!/bin/bash -x

set -e

rm -rf layer
docker build -t py311-libsndfile-builder .
CONTAINER=$(docker run -d py311-libsndfile-builder false)
docker cp $CONTAINER:/opt layer
docker rm $CONTAINER
