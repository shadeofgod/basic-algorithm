// Find the Longest Word in a String 最长单词

/**
 * 
 * @param {string} str 
 */
function findLongestWord(str) {
  arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length;
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[arr.length - 1];
}

findLongestWord("The quick brown fox jumped over the lazy dog");