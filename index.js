'use strict';

/**
 * @return {string} The current version of the package.
 */
function getVersion() {
  if (process.env.npm_package_version) {
    return process.env.npm_package_version;
  }
  const pkg = require(require('app-root-path').resolve('./package.json'));
  return pkg.version;
}

module.exports = getVersion();
