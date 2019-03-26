'use strict'

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 * ;
function total (items){
    for (let i= 0; i< items.length; i++)
    return (items[0]+ items[1]+ items[2] + items[3]+ items[4]);
 * 
 */


function total(items) {
    let sum = 0
    for (let i= 0; i< items.length; i++){
    sum = sum + items[i]
}
    return sum;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)


// End of tests */
