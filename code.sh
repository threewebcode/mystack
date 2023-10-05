#!/usr/bin/env bash

function create(){
  npm install -g @nestjs/cli
  nest new app
}

function commit(){
  git config --local user.name threewebcode
  git config --local user.email magestore@outlook.com
  git add --all && git commit -m "$1" && git push
}

$@
