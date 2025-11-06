/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let arr = nums.sort((a,b) => a - b);

    let spi = 1;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0 && arr[i] === spi) {
            spi++;
        }else if (arr[i] > spi){
            return spi;
        }
    }
    return spi;
};
