# `FFmpeg` Lambda Layer

This project gives you the ability to use [FFmpeg](https://www.ffmpeg.org/) in AWS Lambda by leveraging the power of Lambda Layers.

## Instructions

```
./build.sh
```

```
sls deploy
```

## How to use

You can attach the newly created layer to your Lambda manually in the AWS Management console. Alternatively, if you are using the `Serverless` framework, you can add the `ARN` to the relevant Lambda as below:

```
...

functions:
  greetings:
    handler: handler.hello
    layers:
      - <the generated ARN>

...
```
