import test from 'ava';
import freshreq from 'import-fresh';

test('should return the version', t => {
  const m = freshreq('.');

  t.is(m, '1.0.0');
});

test('should return the version if the env var is undefined', t => {
  const original = process.env.npm_package_version;
  delete process.env.npm_package_version;
  const m = freshreq('.');

  t.is(m, '1.0.0');
  process.env.npm_package_version = original; // eslint-disable-line camelcase
});
