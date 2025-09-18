/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    let memo = new Map();
    let callCount = 0;

    return function (...args) {

        if (memo.has(JSON.stringify(args))) {
            return memo.get(JSON.stringify(args));
        } else {
            callCount ++;
            let result = fn(...args);
            memo.set(JSON.stringify(args), result)
            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
