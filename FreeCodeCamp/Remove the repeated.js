// 数组去重
var arr = [1, 1, 2, 3, 4, 5, 7, 34, 8, 34, 24, 35, 7, 5];

/**
 * 
 * @param {array} arr 
 */
function removeRepeat(arr) {
  // 建立一个新数组
  var result = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    // 如果有与新数组中的元素相同的话则不放进去
    var repeat = false;
    for (var j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        repeat = true;
        break;
      }
    }
    // 从原数组中把每个元素放入新数组
    if (!repeat) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

/**
 * 
 * @param {array} arr 
 */
function removeRepeat2(arr) {
  // 首先排序
  arr.sort();
  var result = [arr[0]];
  // 检查原数组中的第i个元素与结果数组中的最后一个元素是否相同，因为已经排序，所以重复元素会在相邻位置
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== result[result.length - 1]) {
      result.push(arr[i])
    }
  }
  console.log(result);
}

/**
 * 
 * @param {array} arr 
 */
function removeRepeat3(arr) {
  // 利用空对象键值对的格式来存放
  var result = [];
  var json = {};
  for (var i = 0; i < arr.length; i++) {
    //循环遍历把每个元素拿出来当成对象的属性去访问，不能访问到则存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
    if (!json[arr[i]]) {
      result.push(arr[i]);
      json[arr[i]] = 1;
    }
  }
  console.log(result)
}
removeRepeat(arr);
removeRepeat3(arr);
removeRepeat2(arr);