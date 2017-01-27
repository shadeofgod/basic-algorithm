/*
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

// me
function longestConsec(strarr, k) {
    if (strarr.length === 0 || strarr.length < k || k <= 0) {
        return "";
    } else {
        var max = 0;
        var index = 0;
        for (let i = 0; i < strarr.length; i++) {
            if (strarr[i].length > max) {
                max = strarr[i].length;
                index = i;
            }
        }
        console.log(max, index);
        return strarr.splice(index, k).join("");
    }
}

// top solutions
function longestConsec(strarr, k) {
    var longest = "";
    for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
        var tempArray = strarr.slice(i, i + k);
        var tempStr = tempArray.join("");
        if (tempStr.length > longest.length) {
            longest = tempStr;
        }
    }
    return longest;
}
