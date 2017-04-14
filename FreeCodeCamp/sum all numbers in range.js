function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var range = [];
  for (var i = min; i <= max; i++) {
    range.push(i);
  }
  return range.reduce(function(a, b){
    return a + b;
  });
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));