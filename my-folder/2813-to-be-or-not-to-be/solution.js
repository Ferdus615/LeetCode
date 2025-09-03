/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (arg1) => {
            if (val === arg1){
                return true;
            }else {
                throw new Error("Not Equal");
            }
        },

        notToBe: (arg2) => {
            if (val !== arg2) {
                return true;
            }else {
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
