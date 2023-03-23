#!/usr/bin/env bash

function create(){
  npm install -g @nestjs/cli
  nest new app
}

function commit(){
  git add --all && git commit -m "$1" && git push
}

$@
