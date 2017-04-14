function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) >= 0) {
      arr2 = arr2.filter(function(val) {
        return val !== arr1[i];
      });
      console.log(arr2);
    } else {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

var a = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
var b = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

console.log(b);
