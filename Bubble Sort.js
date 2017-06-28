//将数组按从小到大的顺序（或者从大到小的顺序）排序
// var array = [65, 97, 76, 13, 27, 49, 58];
var array = [21, 1, 3, 4, 22, 45, 6, 7, 32];
//思路：从第一个数开始，与下一个数比较大小，若按从小到大的顺序，那么将前一个较大的数与较小的数交换位置。
var s = 0;
var s1 = 0

//外循环控制比较的趟数，内循环控制比较的次数
for (var i = 0; i < array.length - 1; i++) {
  var isSort = true;
  for (var j = 0; j < array.length - 1 - i; j++) { //控制比较的次数,第j个数不需要再与前面的数比较，所以可以简化为j<array.length-1-i!这里是第一次优化！
    if (array[j] < array[j + 1]) {
      // console.log(array);
      isSort = false;
      var tmp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = tmp; //交换位置
    }
    s++;
  }

  if (isSort) { //设置一个记录是否进入到交换位置的if条件的boolean参数，如果上一次均没有进入的话即已经完成排序！这里是二次优化！！
    break;
  }

  // console.log(array);
  s1++;
}
// console.log("内循环的次数为：" + s);
// console.log("外循环的次数为：" + s1);
console.log(array);