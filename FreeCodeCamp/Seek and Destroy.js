// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

/**
 * 
 * @param {array} arr 
 */
function destroyer(arr) {
  arr = arguments[0] || arr;
  var args = Array.from(arguments).slice(1);

  function filterByValue(element) {
    for (var i = 0; i < args.length; i++) {
      if (element === args[i]) {
        return false;
      }
    }
    return true;
  }
  var result = arr.filter(filterByValue);
  // console.log(result);
  return result;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].