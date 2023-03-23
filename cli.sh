#!/usr/bin/env bash

function create(){
  npm install -g @nestjs/cli
  nest new app
}

function test(){
  pwd
}

$@
