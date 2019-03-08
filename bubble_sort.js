class Sorter {
  sort(numbers) {
    var notSorted = true;
    while (notSorted) {
      notSorted = false;
      for (var i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
          var higherNumber = numbers[i];
          numbers[i] = numbers[i + 1];
          numbers[i + 1] = higherNumber;
          notSorted = true;
        }
      }
    }
    return numbers;
  }
}

module.exports = Sorter;