// reverse a string 字符串反转
/**
 * 
 * @param {string} str 
 */
function reverseString(str) {
  var arr = [];
  arr = str.split("");
  str = arr.reverse().join("");
  return str;
}
reverseString("wocao");