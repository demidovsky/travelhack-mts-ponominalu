#!/bin/bash

REPOSITORY=demidovsky
VERSION=latest
NAME=travel

echo "Pushing docker image $NAME:$VERSION"
docker push $REPOSITORY/$NAME:$VERSION
