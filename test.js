import test from 'ava';
import m from '.';

test.serial('should return the right version of this project', t => {
  t.is(m, '1.0.0');
  const original = process.env.npm_package_version;
  process.env.npm_package_version = undefined; // eslint-disable-line camelcase
  t.is(m, '1.0.0');
  process.env.npm_package_version = original; // eslint-disable-line camelcase
});
