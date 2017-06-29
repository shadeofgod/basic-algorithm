// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

/**
 * 
 * @param {array} arr 
 */
function largestOfFour(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    var a = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (a < arr[i][j]) {
        a = arr[i][j];
      } else {
        a = a;
      }
    }
    array[i] = a;
  }
  return array;
}


largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
// should return [27,5,39,1001]
largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1]
]); // should return [9, 35, 97, 1000000]