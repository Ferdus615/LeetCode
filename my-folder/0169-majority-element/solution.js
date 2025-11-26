/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const table = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!table.has(nums[i])) {
            table.set(nums[i], 1);
        } else {
            let val = table.get(nums[i]);
            table.set(nums[i], val + 1);
        }
    }

    let maxFreq = 0;
    let maxKey = 0;

    for (let [key, value] of table.entries()) {
        if (value > maxFreq) {
            maxFreq = value;
            maxKey = key;
        }
    }

    return maxKey;
};
