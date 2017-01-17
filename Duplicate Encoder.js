/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

*/

//me:
function duplicateEncode(word){
	return word.toLowerCase().split('').map(function(elem, index, arr){
		if(arr.indexOf(elem) === index && arr.lastIndexOf(elem) === index)) {
			return "(";
		} else {
			return ")";
		}
	}).join('');
}

//top
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}