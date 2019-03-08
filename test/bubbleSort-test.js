const assert = require('chai').assert
const Sorter = require('../bubble_sort')

describe('sorting algorithm', function () {
  it('can sort a list', function () {
    var list = [];
    for (var x = 0; x < 20; x++) {
      list.push(Math.floor(Math.random() * 10))
    }

    const sorter = new Sorter();
    var sortedList = sorter.sort(list);
    var expected = list.sort();

    assert.deepEqual(sortedList, expected);
  })
})