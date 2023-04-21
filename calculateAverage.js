/* DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

 */
// My solution
function findAverage(array) {
    if (array.length === 0){
      return 0
    }
    let sum = array.reduce((total, x) => total += x);
    let newSum = sum / array.length;
    return newSum
    
  }