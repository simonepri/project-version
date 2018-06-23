'use strict';

/**
 * @return {string} The current version of the package.
 */
function getVersion() {
  let version = process.env.npm_package_version;
  if (version === undefined || version === null) {
    version = require(require('app-root-path').resolve('./package.json')).version;
  }
  return version;
}
