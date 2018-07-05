# project-version
> Get the current version of your project as js lib or via cli call.
< Forked from [https://github.com/simonepri/project-version](https://github.com/simonepri/project-version)

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
* **Benjamin Jesuiter** - [bjesuiter](https://github.com/bjesuiter) (for the cli part)

See also the list of [contributors](https://github.com/simonepri/project-version/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
