/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const table = new Map();
    const result = [];
    let duplicateNum;
    let missingNum;

    for (const num of nums) {
        const currentCount = table.get(num) ?? 0;
        table.set(num, currentCount + 1);
    }

    for (let i = 1; i <= nums.length; i++) {
        const val = table.get(i);

        if (val === 2) {
            duplicateNum = i;
        } else if (val === undefined) {
            missingNum = i;
        }

        if (duplicateNum !== undefined && missingNum !== undefined) {
            break;
        }
    }

    console.log(table)
    result.push(duplicateNum, missingNum);
    return result;
}
