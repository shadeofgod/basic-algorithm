// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

/**
 * 
 * @param {string} str 
 * @param {number} num 
 */
function truncateString(str, num) {
  var result, tmp;
  num = num || parseInt(num);
  if (num >= str.length) {
    result = str;
  } else if (num > 3) {
    tmp = str.slice(num - 3);
    result = str.replace(tmp, "...");
  } else {
    tmp = str.slice(num);
    result = str.replace(tmp, "...");
  }
  console.log(result);
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); // should return "A-tisket...".

truncateString("Peter Piper picked a peck of pickled peppers", 14); // should return "Peter Piper...".

truncateString("A-", 1); // should return "A..."
truncateString("Absolutely Longer", 2); // should return "Ab...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // should return "A-tisket a-tasket A green and yellow basket".