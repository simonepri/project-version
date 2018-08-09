'use strict';

/**
 * @return {string} The current version of the package.
 */
function getVersion() {
  return require('read-pkg').sync().version;
}

module.exports = getVersion();
