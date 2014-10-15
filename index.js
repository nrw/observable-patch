var ObservStruct = require('observ-struct')
var Computed = require('observ/computed')

var patcher = require('patcher')

module.exports = DiffData

function DiffData (first, last) {
  return ObservStruct({
    first: first,
    last: last,
    patch: Computed([first, last], function (b, p) {
      return patcher.computePatch(b, p)
    })
  })
}
