// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Check for Palindromes 回文检测

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


/**
 * 
 * @param {string} str 
 */
function palindrome(str) {
  var re = /[^A-Za-z0-9]/gi;
  var str = str.replace(re, "").toLowerCase();
  var reversedStr = reverseString(str);
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}



console.log(palindrome("Eye"));