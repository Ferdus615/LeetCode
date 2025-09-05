/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = [];

    arr.forEach((ele, index) => {
        newArr.push(fn(ele, index))
    })
    return newArr;
};
