#!/bin/bash
PROJECT_PATH='pwd -P'
export NODE_ENV=local

docker-compose down && docker-compose up -d && sleep 30
typeorm-ts-node-esm -d src/utils/data-source.ts schema:sync

cd $PROJECT_PATH
if npm run start:local; then
  echo "Server Stopped"
  docker-compose down
else
  echo "Server Got Crashed"
  docker-compose down
  exit 1
fi