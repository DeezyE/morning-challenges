/*
Sample
Produce a random sample from an array. Pass a number to return n random elements
from the list. Otherwise a single random item will be returned.
Example:
sample([1, 2, 3, 4, 5, 6]);
=> 4
sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
*/

// Your code here!
const sample = (array,num) => {
    newArr = []    
    // console.log(length)
    if (!!num ? num : num = 1) {
        let len = array.length
        for (let i = 0; i < len; i+2) {
            const rand = Math.floor((Math.random() * len))
            newArr.push(array[rand])
            array.splice(rand,1)
            console.log(rand)
            len = len - 1
        }
         
    }
    return newArr
}

// sample([1])


// Check your solution by running these tests: mocha *this_filename*

const assert = require('assert');

describe('Sample', () => {
  it('behaves correctly when no second parameter is given', () => {
    assert.equal(sample([1]), 1);
  });
  it('behaves correctly on negative n', () => {
    assert.equal(sample([1], -2), 1);
  });
  it('returns a sample without duplicates', () => {
    assert.deepEqual(sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10).sort(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("handles too many n's", () => {
    assert.deepEqual(sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 11).sort(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});