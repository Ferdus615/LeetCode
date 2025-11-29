/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    let index = 0;

    for (num of nums) {
        if (num !== 0) {
            nums[index] = num;
            index ++;
        }
    }

    while (index < len){
        nums[index] = 0;
        index ++;
    }
};
