var test = require('tape')
var Observ = require('observ')
var DiffData = require('..')

var diff, first, last

test('simple use', function (t) {
  t.plan(8)

  first = Observ({a: 'a'})
  last = Observ({a: 'a', b: 'b'})
  diff = DiffData(first, last)

  t.same(diff.patch(), {b: 'b'})
  t.same(diff.first(), {a: 'a'})
  t.same(diff.last(), {a: 'a', b: 'b'})

  diff.last.set({a: 'a'})

  t.same(diff.last(), {a: 'a'})
  t.same(diff.patch(), null)

  diff.patch(function (p) {
    t.same(p, {'$r': 'a', c: 'c'})
  })

  diff.last.set({c: 'c'})

  t.same(diff.last(), {c: 'c'})
  t.same(diff.patch(), {'$r': 'a', c: 'c'})
})
