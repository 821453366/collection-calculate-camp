'use strict';
var number_map_to_word_over_26 = function (collection) {
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var result = [];

  for (var index in collection) {
    if (collection[index] % 26 === 0) {
      result.push(letter[Math.floor(collection[index] / 26) - 1].concat(letter[26]));
    } else {
      result.push(letter[Math.floor(collection[index] / 26)].concat(letter[collection[index] % 26]));
    }
  }
  return result;
};

module.exports = number_map_to_word_over_26;
