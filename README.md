# project-version
[![Travis CI](https://travis-ci.org/simonepri/project-version.svg?branch=master)](https://travis-ci.org/simonepri/project-version) [![Codecov](https://img.shields.io/codecov/c/github/simonepri/project-version/master.svg)](https://codecov.io/gh/simonepri/project-version) [![npm](https://img.shields.io/npm/dm/project-version.svg)](https://www.npmjs.com/package/project-version) [![npm version](https://img.shields.io/npm/v/project-version.svg)](https://www.npmjs.com/package/project-version) [![npm dependencies](https://david-dm.org/simonepri/project-version.svg)](https://david-dm.org/simonepri/project-version) [![npm dev dependencies](https://david-dm.org/simonepri/project-version/dev-status.svg)](https://david-dm.org/simonepri/project-version#info=devDependencies)
> 👀 Get the current version of your project.

## Install

```
$ npm install --save project-version
```

## JS Usage
```js
const version = require('project-version');

// Caution: console.log outputs newlines, use process.stdout.write to avoid whitespaces
console.log(version);
//=>  '1.0.0'
```

## CLI Usage

### inside npm scripts
```json
{
  "scripts": {
    "get-version": "project-version",
    "capture-version-for-build-scripts": "echo $(project-version)"
  }
}
```

### outside npm scripts
```bash
// with npm@5.2.0
npx project-version

// before npm@5.2.0
node ./node_modules/project-version/cli.js
```

## Authors
* **Simone Primarosa** - [simonepri](https://github.com/simonepri)

See also the list of [contributors](https://github.com/simonepri/project-version/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
