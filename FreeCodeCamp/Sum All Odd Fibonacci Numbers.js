/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
 */


/**
 * sumFibs(1) should return a number.
 * sumFibs(1000) should return 1785.
 * sumFibs(4000000) should return 4613732.
 * sumFibs(4) should return 5.
 * sumFibs(75024) should return 60696.
 * sumFibs(75025) should return 135721.
 */

function sumFibs(num) {
  if (typeof num !== 'number') {
    throw new Error('input should be a number');
  }
  if (num === 1) return 1;
  var fibs = [1, 1];
  var n = 0;
  while (true) {
    var x = fibs[n] + fibs[n + 1];
    if (x > num) break;
    fibs[n + 2] = x;
    n++;
  }
  return fibs.reduce(function(acc, val) {
    return val % 2 !== 0 ? acc + val : acc;
  }, 0);
}

sumFibs(4);