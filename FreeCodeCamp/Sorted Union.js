/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * 
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * 
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * 
 * Check the assertion tests for examples.
 */

/**
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 * uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
 */

function uniteUnique(arr) {
  if (arguments.length < 2) {
    throw new Error('function takes at least two arrays.');
  }

  var tmp = [];
  var args = [].slice.call(arguments);
  args.forEach(function(item) {
    tmp = tmp.concat(item);
  });

  return tmp.reduce(function(acc, val) {
    console.log(acc, val);
    if (acc.indexOf(val) < 0) {
      return Array.isArray(val) ? acc.concat([val]) : acc.concat(val);
    } else {
      return acc;
    }
  }, []);
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]])