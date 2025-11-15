/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const match = new Map();
    let result;

    for (let i = 0; i < nums.length; i++) {
        if (!match.get(nums[i])) {
            match.set(nums[i], 1)
        } else {
            match.set(nums[i], (Number(match.get(nums[i]) + 1)))
        }
        match.forEach((value, key) => {
            if (value > nums.length / 2) {
                result = key;
            }
        })
    }

    return result;
};
