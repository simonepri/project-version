#!/usr/bin/env node
'use strict';

const projectVersion = require('./lib');

// Note: I use stdout.write here to avoid whitespaces in the output,
// which could be problematic when used with other cli tools in npm scripts

// Since console.log outputs a new line (/n) before the content, I don't use it here.
process.stdout.write(projectVersion);
