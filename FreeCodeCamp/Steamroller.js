// Flatten a nested array. You must account for varying levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

function steamrollArray(arr) {
  // I'm a steamroller, baby
  if (!Array.isArray(arr)) {
    throw new Error('The argument passed in should be an array.');
  }

  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? steamrollArray(val) : val);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);