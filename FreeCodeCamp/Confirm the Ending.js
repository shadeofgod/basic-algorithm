// Check if a string (first argument, str) ends with the given target string (second argument, target).
/**
 * 
 * @param {string} str 
 * @param {string} target 
 */
function confirmEnding(str, target) {
  var re = new RegExp(target + "$", "g");
  return re.test(str);
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Connor", "n"); // false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // false
confirmEnding("Open sesame", "same"); // true
confirmEnding("Open sesame", "pen"); // false