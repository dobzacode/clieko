#!/bin/bash

# Build the Docker image
docker build -t doubledrop-dev-getbpm .

# Tag the image for ECR
docker tag doubledrop-dev-getbpm:latest 182399718556.dkr.ecr.eu-central-1.amazonaws.com/doubledrop-dev-getbpm:latest

# Push the image to ECR (replace with your actual ECR URI)
docker push 182399718556.dkr.ecr.eu-central-1.amazonaws.com/doubledrop-dev-getbpm:latest

# Deploy the serverless application (assuming serverless is installed)
serverless deploy

# Exit script on error (commands use exit on non-zero exit code)
set -e