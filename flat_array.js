/**
 * type check
 */
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}

/**
 * turn multi dimension array to flat
 * @param {Array} arr 
 */
function flatArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('The argument passed in should be an array.')
  }

  var result = []

  arr.forEach(function(item) {
    if (Array.isArray(item)) {
      result = result.concat(flatArray(item))
    } else {
      result.push(item)
    }
  })

  return result
}

/**
 * 
 * @param {Array} arr 
 */
function flatArray2(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('The argument passed in should be an array.');
  }

  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? flatArray2(val) : val);
  }, []);

}

/**
 * 
 * @param {Array} arr 
 */
const flatArray3 = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatArray2(val) : val), []);

var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, [3, 4, 5, 6, 7]]
var arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13, 14]]]]]]]