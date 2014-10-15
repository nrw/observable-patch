# observable-patch [![build status](https://secure.travis-ci.org/nrw/observable-patch.png)](http://travis-ci.org/nrw/observable-patch)

A computed `observ` the computes a patch between a base state and a patched state.

```js
var ObservPatch = require('observable-patch')
var Observ = require('observ')
var assert = require('assert')

var first = Observ({a: 'a'})
var last = Observ({a: 'a', b: 'b'})
var diff = ObservPatch(first, last)

// patch is computed by patcher
assert.deepEqual(diff.patch(), {b: 'b'})
```
