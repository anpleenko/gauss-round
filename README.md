# gauss-round

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Install

```
npm install --save gauss-round
```

## Usage

```javascript
import gaussRound from 'gaussRound';

// or

import gaussRound from 'gaussRound/dist/decimalOne.js'; // decimal 1 is default

// or

import gaussRound from 'gaussRound/dist/decimalTwo.js'; // decimal 2 is default

console.log(gaussRound(3.59, 1));
// > 3.6

console.log(gaussRound(45.3174, 2));
// > 45.32

```

[downloads-image]: https://img.shields.io/npm/dm/gauss-round.svg
[npm-url]: https://www.npmjs.com/package/gauss-round
[npm-image]: https://img.shields.io/npm/v/gauss-round.svg
