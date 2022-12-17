#!/usr/bin/env node

const PushMe = require('..');

const pushme = new PushMe();

const [ title, content ] = process.argv.slice(2);

pushme.send(title, content);