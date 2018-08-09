import test from 'ava';
import freshreq from 'import-fresh';

test('should return the version', t => {
  const m = freshreq('.');

  t.is(m, '1.0.0');
});
