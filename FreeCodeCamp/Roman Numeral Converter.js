function convertToRoman(num) {
  var n = parseInt(num);
  console.log(n);
  if (n > 5000) {
    throw new Error('number is too large!');
  }
  var romanNum = [];
  if (n/1000 >=1) {
    var  k = parseInt(n/1000);
    for (var ki = 0;ki < k;ki++) {
      romanNum.push('M');
    }
    n = n - 1000 * k;
  }
  if (n/100 >=1) {
    var m = parseInt(n/100);
    switch (m) {
      case 1:
        romanNum.push('C');
        break;
      case 2:
        romanNum.push('CC');
        break;
      case 3:
        romanNum.push('CCC');
        break;
      case 4:
        romanNum.push('CD');
        break;
      case 5:
        romanNum.push('D');
        break;
      case 6:
        romanNum.push('DC');
        break;
      case 7:
        romanNum.push('DCC');
        break;
      case 8:
        romanNum.push('DCCC');
        break;
      case 9:
        romanNum.push('CM');
        break;
    }
    n = n - 100 * m;
  }
  if (n/10 >= 1) {
    var t = parseInt(n/10);
    switch (t) {
      case 1:
        romanNum.push('X');
        break;
      case 2:
        romanNum.push('XX');
        break;
      case 3:
        romanNum.push('XXX');
        break;
      case 4:
        romanNum.push('XL');
        break;
      case 5:
        romanNum.push('L');
        break;
      case 6:
        romanNum.push('LX');
        break;
      case 7:
        romanNum.push('LXX');
        break;
      case 8:
        romanNum.push('LXXX');
        break;
      case 9:
        romanNum.push('XC');
        break;
    }
    n = n - t * 10;
  }
  if (n >= 1) {
    var g = n;
    switch (g) {
      case 1:
        romanNum.push('I');
        break;
      case 2:
        romanNum.push('II');
        break;
      case 3:
        romanNum.push('III');
        break;
      case 4:
        romanNum.push('IV');
        break;
      case 5:
        romanNum.push('V');
        break;
      case 6:
        romanNum.push('VI');
        break;
      case 7:
        romanNum.push('VII');
        break;
      case 8:
        romanNum.push('VIII');
        break;
      case 9:
        romanNum.push('IX');
        break;
    }
  }
  console.log(romanNum);
  return romanNum.join('');
}

convertToRoman(3999);