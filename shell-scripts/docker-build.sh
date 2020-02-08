#!/bin/bash

REPOSITORY=demidovsky
VERSION=latest
NAME=travel

echo "Building docker image $NAME:$VERSION"
docker build . --tag=$REPOSITORY/$NAME:$VERSION
