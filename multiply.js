function multiply(a, b) {
  var len1 = 0
  var len2 = 0
  if (a % 1 !== 0) {
    len1 = a.toString().split('.')[1].length
  }
  if (b % 1 !== 0) {
    len2 = b.toString().split('.')[1].length
  }
  return (a * b).toFixed(len1 + len2)
}