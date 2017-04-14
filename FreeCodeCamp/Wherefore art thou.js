function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  for (var i=0;i<collection.length;i++) {
    var flag = true;
    for (var key in source) {
      if (!collection[i].hasOwnProperty(key) || collection[i][key] !== source[key]) {
        flag = false;
      }
    }
    if (flag) {
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
// should return [{ "a": 1, "b": 2, "c": 2 }]