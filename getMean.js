/* Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7 */

// My solution 

var findAverage = function (nums) {
    return nums.reduce((total, x) => total + x, 0) / nums.length;
   }