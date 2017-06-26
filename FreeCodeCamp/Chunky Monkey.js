// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

/**
 * 
 * @param {array} arr 
 * @param {number} size 
 */
function chunkArrayInGroups(arr, size) {
  var r = [];
  var tmp;
  len = Math.ceil(arr.length / size);
  for (var i = 0; i < len; i++) {
    tmp = arr.slice(size * i, size * (i + 1));
    r.push(tmp);
  }

  // console.log(r); 

  return r;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [[ "a", "b"], [ "c", "d"]]. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //should return [ [0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]]. 
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]] 
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]. 
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7],[8]].