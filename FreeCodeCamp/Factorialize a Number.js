// factorialize a number 阶乘
/**
 * 
 * @param {number} num 
 */
function factorialize(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

factorialize(5);