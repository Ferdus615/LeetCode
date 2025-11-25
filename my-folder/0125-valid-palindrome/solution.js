/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^\w]|_/g, "").toLowerCase()

    if (!str || str.length === 0) return true;

    let i = 0;
    let j = str.length-1

    while(i<j){
        if (str[i] !== str[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true;
};
