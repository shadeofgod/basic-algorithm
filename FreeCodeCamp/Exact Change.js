// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.

/**
 * 
 * @param {number} price 
 * @param {number} cash 
 * @param {array} cid 
 */
function checkCashRegister(price, cash, cid) {

  // somecode about arguments check

  var change = cash - price;
  var changeLeft = change;

  if (change <= 0) {
    return 'no change needed';
  }

  var totalCid = 0;

  cid = cid.reverse();
  var unit = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  var quantity = {};


  for (var i = 0; i < unit.length; i++) {
    totalCid += cid[i][1];
    if (changeLeft > unit[i]) {
      var q = Math.floor(changeLeft / unit[i]);
      quantity[cid[i][0]] = Math.min(q * unit[i], cid[i][1]).toFixed(2);
      quantity[cid[i][0]] = parseFloat(quantity[cid[i][0]]);
      changeLeft = (changeLeft - quantity[cid[i][0]]).toFixed(2);
    }
  }

  if (change === totalCid) {
    return 'Closed';
  }

  if (changeLeft > 0) {
    return 'Insufficient Funds';
  }

  var result = [];
  for (key in quantity) {
    result.push([key, quantity[key]]);
  }
  console.log(result)
  return result;
}

// checkCashRegister(19.50, 20.00, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.10],
//   ["QUARTER", 4.25],
//   ["ONE", 90.00],
//   ["FIVE", 55.00],
//   ["TEN", 20.00],
//   ["TWENTY", 60.00],
//   ["ONE HUNDRED", 100.00]
// ]);

checkCashRegister(3.26, 100.00, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
])

// checkCashRegister(19.50, 20.00, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.10],
//   ["QUARTER", 4.25],
//   ["ONE", 90.00],
//   ["FIVE", 55.00],
//   ["TEN", 20.00],
//   ["TWENTY", 60.00],
//   ["ONE HUNDRED", 100.00]
// ])