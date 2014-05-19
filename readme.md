# concurrentify[![build status](https://secure.travis-ci.org/kesla/concurrentify.png)](http://travis-ci.org/kesla/concurrentify)

An alternative api to run-concurrent

[![NPM](https://nodei.co/npm/concurrentify.png?downloads&stars)](https://nodei.co/npm/concurrentify/)

[![NPM](https://nodei.co/npm-dl/concurrentify.png)](https://nodei.co/npm/concurrentify/)

## Installation

```
npm install concurrentify
```

## Example

### Input

```javascript
var concurrentify = require('./concurrentify')
  , basic = concurrentify()
  , named = concurrentify.named()

// basic usage
basic.add(function (cb) {
  cb(null, 1)
})

basic.add(function (cb) {
  cb(null, 2)
})

basic.add(function (cb) {
  cb(null, 3)
})

basic.exec(2, function (err, results) {
  console.log('basic', results)
})

// you can name things!
named.add('hello', function (cb) {
  cb(null, 'world')
})

named.add(function (cb) {
  cb(null, 'this result is ignored')
})

named.add('beep', function (cb) {
  cb(null, 'boop')
})

named.exec(2, function (err, results) {
  console.log('named', results)
})

// you can chain things!
concurrentify()
  .add(function (cb) {
    setTimeout(function () {
      cb(null, 1)
    }, 200)
  })
  .add(function (cb) {
    setTimeout(function () {
      cb(null, 2)
    }, 100)
  })
  .add(function (cb) {
    setTimeout(function () {
      cb(null, 3)
    }, 50)
  })
  .exec(2, function (err, results) {
    console.log('chained', results)
  })
```

### Output

```
basic [ 1, 2, 3 ]
named { hello: 'world', beep: 'boop' }
chained [ 1, 2, 3 ]
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

