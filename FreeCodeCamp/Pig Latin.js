/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(str[0]) >= 0) {
    str = str += 'way';
  } else {
    var k = 0;
    var arr = str.split('');
    for (var i = 0, len = arr.length;i<len;i++) {
      if (vowels.indexOf(arr[i]) >= 0) {
        k = i;
        break;
      }
    }
    str = str.slice(i) + str.slice(0, i) + 'ay';
  }
  return str;
}

translatePigLatin("consonant");
