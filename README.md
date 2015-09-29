# checkbox/radio styling module for es6
<!-- [![npm download count](https://img.shields.io/npm/dm/future-tabs.svg?style=flat)](https://www.npmjs.org/package/future-tabs)
[![Current tag](https://img.shields.io/npm/v/future-tabs.svg?style=flat)](https://www.npmjs.org/package/future-tabs)
[![Current tag](https://img.shields.io/bower/v/future-tabs.svg?style=flat)](https://github.com/prog666/tabs)
[![Issues closed](http://issuestats.com/github/prog666/tabs/badge/issue?style=flat)](http://issuestats.com/github/prog666/tabs) -->

## Features
* No dependencies
* ES2015 support (use babel)

use [browserify](http://browserify.org/) with [babelify extension](https://github.com/babel/babelify) or [gulp version](https://github.com/deepak1556/gulp-browserify)

## Usage

include `checkbox-radio-styler.js` and `checkbox-radio-styler.css`

### init

```javascript
var styled = new CheckboxRadioStyler('input[type="checkbox"], input[type="radio"]');
styled.init();
```

### destroy

```javascript
styled.destroy();
```

## todo:
- check input type
- test in browsers
- write some tests
- test memory usage
- maybe get rid of "ElementStyler" class
