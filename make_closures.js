/**
 * 使用闭包
 * 实现函数 makeClosures，调用之后满足如下条件：
 * 1、返回一个函数数组 result，长度与 arr 相同
 * 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
 * @param {array} arr 
 * @param {function} fn 
 */
function makeClosures(arr, fn) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res[i] = (function() {
      var x = arr[i]
      return function() {
        return fn.call(null, x);
      }
    })();
  }
  return res;
}

function makeClosures2(arr, fn) {
  var result = [];
  arr.forEach(function(obj) {
    result.push(function() {
      return fn(obj);
    })
  });
  return result;
}

var res = makeClosures([1, 2, 3], function(x) {
  return x * x;
})

console.log(res[0]())
console.log(res[1]())
console.log(res[2]())