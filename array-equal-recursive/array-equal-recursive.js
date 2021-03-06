/*

  This is the same as yesterday's challenge with one difference.

  arrayEqual should now work with nested arrays.
  e.g. [1,[2,3],4] <- Notice the second element is an array itself?

  Research: recursion :) This is a tough one, whiteboard first!

  Examples (same as yesterday):
  arrayEqual([1,2,3], [1,2,3]) -> true
  arrayEqual([1,2,3], [2,3,4]) -> false
  arrayEqual([1,2,3,[4,5,6]], [1,2,3,[4,5,6]]) -> true

  Don't use JSON.stringify in your solution.

  Check your solution:  Open index.html to run the tests!

*/

function arrayEqual(a, b) {

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {

    if (Array.isArray(a[i])) {
      if (!arrayEqual(a[i], b[i])) {
        return false;

      } else {
        if (a[i] !== b[i]) {
          return false;
        }
      }
    }

  }
  return true;
}

// why does this work
function arrayEqual(a, b) {

  // Check lengths
  if (a.length !== b.length) {
    return false;
  }

  for(let i=0; i<a.length; i++) {

    // Handle nested arrays
    if (Array.isArray(a[i])) {
      // Recurse
      if (!arrayEqual(a[i], b[i]))){
        return false;
      }
    } else if (a[i] !== b[i]) { // Check values
      return false;
    }
  }

  return true; //Otherwise, all good

}