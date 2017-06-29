var arr = [53, 27, 36, 78, 43, 61, 22];

/**
 * 
 * @param {array} arr 
 */
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      var tmp = arr[i];
      var j = i - 1;
      arr[i] = arr[j];
      while (j >= 0 && tmp < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = tmp;
    }
  }
  return arr;
}

console.log(insertionSort(arr));