/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    
    for (let i=1; i<nums.length; i++) {
        if (nums[i] !== nums[index]) {
            nums[index + 1] = nums[i];
            index++;
        } else {
            nums[i] = 0;
        }
    }
    return index+1;
};
