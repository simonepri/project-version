const test = require('ava');
const freshreq = require('import-fresh');

test('should return the version', t => {
  const m = freshreq('.');
  const v = require('./package.json').version;

  t.is(m, v);
});
