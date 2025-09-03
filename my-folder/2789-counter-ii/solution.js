/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

let createCounter = (init) => {
    const og = init;
    return {
        increment: ()=> {
            return ++init;
        },
        decrement: ()=> {
            return --init;
        },
        reset: ()=> {
            init = og;
            return init;
        }
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
