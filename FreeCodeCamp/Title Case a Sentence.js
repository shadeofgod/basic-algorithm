// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// 首字母大写，其他小写

/**
 * 
 * @param {string} str 
 */
function titleCase(str) {
  var arr = str.split(" ");
  var re = /^\w/;
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().replace(re, arr[i][0].toUpperCase());
  }
  str = arr.join(" ");
  return str;
}

console.log(titleCase("I'm a little tea pot")); // should return "I'm A Little Tea Pot".
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT.")); // return "Here Is My Handle Here Is My Spout."