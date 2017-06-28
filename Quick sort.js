var arr = [56, 34, 5, 7, 4, 36, 34, 98, 23, 45, 29];

// 快速排序
/**
 * 
 * @param {array} arr 
 */
function quickSort(arr) {
  // 数组长度小于等于1则直接返回
  if (arr.length <= 1) {
    return arr;
  } else {
    // 取一个中间的基准值
    var index = Math.floor(arr.length / 2);
    var pivot = arr.splice(index, 1)[0];
    var left = [];
    var right = [];
    // 数组中小于基准值的数放左边，大于则放右边
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // 利用递归不断重复，最后拼接，完成排序
    return quickSort(left).concat([pivot], quickSort(right));
  }
}

console.log(quickSort(arr));