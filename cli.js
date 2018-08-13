#!/usr/bin/env node
const projectVersion = require('.');

// NB: stdout.write was used to avoid to print a new line at the end of the version string.
process.stdout.write(projectVersion);
