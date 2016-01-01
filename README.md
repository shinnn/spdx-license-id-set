# spdx-license-id-set

[![NPM version](https://img.shields.io/npm/v/spdx-license-id-set.svg)](https://www.npmjs.org/package/spdx-license-id-set)
[![Bower version](https://img.shields.io/bower/v/spdx-license-id-set.svg)](https://github.com/shinnn/spdx-license-id-set/releases)
[![Build Status](https://travis-ci.org/shinnn/spdx-license-id-set.svg?branch=master)](https://travis-ci.org/shinnn/spdx-license-id-set)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/spdx-license-id-set.svg)](https://coveralls.io/r/shinnn/spdx-license-id-set)
[![Dependency Status](https://david-dm.org/shinnn/spdx-license-id-set.svg)](https://david-dm.org/shinnn/spdx-license-id-set)
[![devDependency Status](https://david-dm.org/shinnn/spdx-license-id-set/dev-status.svg)](https://david-dm.org/shinnn/spdx-license-id-set#info=devDependencies)

A [set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set) of [SPDX license](https://spdx.org/licenses/) identifiers

## Installation

### [npm](https://www.npmjs.com/)

```
npm install spdx-license-id-set
```

### [bower](http://bower.io/)

```
bower install spdx-license-id-set
```

## API

### spdxLicenseIdSet

It exposes a [`Set` instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Set_instances) that includes [all the SPDX license identifiers](https://raw.githubusercontent.com/shinnn/spdx-license-ids/master/spdx-license-ids.json).

```javascript
const spdxLicenseIdSet = require('spdx-license-id-set');

spdxLicenseIdSet.has('MIT'); //=> true
spdxLicenseIdSet.has('zlib-acknowledgement'); //=> true

spdxLicenseIdSet.has('foo-bar-baz'); //=> false
```

## License

[The Unlicense](./LICENSE).
