# node-string-to-buffer

[![Build Status](https://travis-ci.org/strugee/node-string-to-buffer.svg?branch=master)](https://travis-ci.org/strugee/node-string-to-buffer)
[![Coverage Status](https://coveralls.io/repos/github/strugee/node-string-to-buffer/badge.svg?branch=master)](https://coveralls.io/github/strugee/node-string-to-buffer?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/strugee/node-string-to-buffer.svg)](https://greenkeeper.io/)

Convert a string to a Buffer across Node versions

See also [to-buffer](https://www.npmjs.com/package/to-buffer) which is similar, but does slightly more

## Install

```
npm install string-to-buffer
```

## Usage

```js
var stringToBuffer = require('string-to-buffer')
stringToBuffer('foobar'); // Buffer
```

## Version support

Supports Node 4+, may support earlier versions too.

## Author

AJ Jordan <alex@strugee.net>

## License

MIT
