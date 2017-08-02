import test from 'ava';
import clearRequire from 'clear-require';

test.beforeEach(() => {
  clearRequire('.');
});

test.serial('should return the version', t => {
  const m = require('.');

  t.is(m, '1.0.0');
});

test.serial('should return the version if the env var is undefined', t => {
  const m = require('.');

  const original = process.env.npm_package_version;
  process.env.npm_package_version = undefined; // eslint-disable-line camelcase
  t.is(m, '1.0.0');
  process.env.npm_package_version = original; // eslint-disable-line camelcase
});
