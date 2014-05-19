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

