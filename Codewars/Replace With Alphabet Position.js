/*
Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

*/

//me:
function alphabetPosition(text) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	return text
		.toLowerCase()
		.split('')
		.filter(function(e) {
			return alphabet.indexOf(e) >= 0;
		})
		.map(function(e) {
			return alphabet.indexOf(e) + 1;
		})
		.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11')

// top:
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(
	ch => ch.charCodeAt(0) - 64).join(' ');

function alphabetPosition(text) {
	return text.match(/[a-zA-Z]/g).map((el) => el.toLowerCase().charCodeAt() - 96).join(' ');
}

function alphabetPosition(text) {
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var code = text.toUpperCase().charCodeAt(i)
		if (code > 64 && code < 91) result += (code - 64) + " ";
	}

	return result.slice(0, result.length - 1);
}
