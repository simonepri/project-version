'use strict';

/**
 * @return {string} The current version of the package.
 */
function getVersion() {
  let version = process.env.npm_package_version;
  if (version === undefined || version === null) {
    const pkg = require(require('app-root-path').resolve('./package.json'));
    version = pkg.version;
  }
  return version;
}

module.exports = getVersion();
