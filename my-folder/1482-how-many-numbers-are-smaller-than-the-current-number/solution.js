;/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a,b) => a-b);
    const map = new Map();

    for (let i=0; i<nums.length; i++) {
        if(!map.has(sorted[i])) {
            map.set(sorted[i], i);
        };
    };

    return nums.map(num => map.get(num));
};
