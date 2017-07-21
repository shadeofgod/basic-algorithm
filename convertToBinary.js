function convertToBinary(num) {
	var bin = (num).toString(2)
    while (bin.length < 8) {
        bin = '0' + bin
    }
    return bin
}

var res = convertToBinary(5)
console.log(res)