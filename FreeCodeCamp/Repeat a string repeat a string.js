// Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

/**
 * 
 * @param {string} str 
 * @param {number} num 
 */
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    var result = "";
    for (var i = 0; i < num; i++) {
      result += str;
    }
    return result;
  } else {
    return "";
  }
}

function repeatStringNumTimes2(str, n) {
  return new Array(n + 1).join(str);
}
console.log(repeatStringNumTimes2("123", 3))