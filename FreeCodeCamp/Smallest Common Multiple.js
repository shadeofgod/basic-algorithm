/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 */

/**
 * smallestCommons([1, 5]) should return a number.
 * smallestCommons([1, 5]) should return 60.
 * smallestCommons([5, 1]) should return 60.
 * smallestCommons([1, 13]) should return 360360.
 * smallestCommons([23, 18]) should return 6056820.
 * 
 */

function smallestCommons(arr) {
  // 省略参数检测

  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var array = [];
  // greated common divisor
  // 递归求最大公约数
  function gcd(a, b) {
    if (a % b === 0) {
      return b;
    }
    return gcd(b, a % b);
  }
  for (var i = min; i <= max; i++) {
    array.push(i);
  }

  // 两个数的最小公倍数为两数之积除以最大公约数
  return array.reduce(function(acc, val) {
    return (acc * val)/gcd(acc, val)
  }, 1);
}



smallestCommons([1, 5]);