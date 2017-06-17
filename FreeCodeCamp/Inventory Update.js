// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 */
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  // some code about arguments check

  // turn array to objec
  var obj1 = {};
  var obj2 = {};

  arr1.forEach(function(element) {
    obj1[element[1]] = element[0];
  }, this);

  arr2.forEach(function(element) {
    obj2[element[1]] = element[0];
  }, this);

  var result = [];
  for (var key in obj2) {
    if (obj1[key]) {
      obj1[key] += obj2[key];
    } else {
      obj1[key] = obj2[key];
    }
  }

  for (var item in obj1) {
    result.push([obj1[item], item]);
  }
  result.sort(function(a, b) {
    return a[1].charCodeAt(0) - b[1].charCodeAt(0);
  });

  return result;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

// updateInventory(curInv, newInv);

updateInventory([
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
], [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
])