/**
 * Sum all the prime numbers up to and including the provided number.
 * 
 * A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 * 
 * The provided number may not be a prime.
 */

/**
 * sumPrimes(10) should return a number.
 * sumPrimes(10) should return 17.
 * sumPrimes(977) should return 73156.
 */

function sumPrimes(num) {
  if (typeof num !== 'number') {
    throw new Error('input should be a number.');
  }
  if (num % 1 !== 0) {
    throw new Error('input should be an integer.');
  }

  if (num === 1) {
    return 1;
  }
  var res = 0;

  for (var i = 2; i <= num; i++) {
    if (i % 2 === 0 && i !== 2) {
      continue;
    }

    if (i === 2 || i === 3 || i === 5 || i === 7) {
      res += i;
      continue;
    }



    var flag = true;
    for (var j = 3; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
      }
    }
    if (flag) {
      res += i;
    }
  }

  return res;
}

sumPrimes(10);