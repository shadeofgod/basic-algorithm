var arr = [23, 2, 5, 8, 9, 3, 12, 7, 18, 1];
var arr2 = [0, 1, 2, 44, 4, 324, 5, 65, 6, 6, 34, 4, 5, 6, 2, 43, 5, 6, 62, 43, 5, 1, 4, 51, 56, 76, 7, 7, 2, 1, 45, 4, 6, 7];

// 选择排序，每个位置上的数与后面每个数比较大小，确保是依次的最小或者最大值
/**
 * 
 * @param {array} arr 
 */
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        arr[i] ^= arr[j];
        arr[j] ^= arr[i];
        arr[i] ^= arr[j];
      }
    }
  }
  return arr;
}

console.log(selectionSort(arr));
console.log(selectionSort(arr2));