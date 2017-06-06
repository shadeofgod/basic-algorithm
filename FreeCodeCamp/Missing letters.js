/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.

*/

function fearNotLetter(str) {
  if (typeof str !== 'string') {
    throw new Error('the argument passed in should be a string');
  }

  for (var i = 0; i < str.length - 1; i++) {

    if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
      return String.fromCharCode(str.charCodeAt(i + 1) - 1);
    }
  }
  return;
}

fearNotLetter("abce");