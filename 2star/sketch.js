function setup() {
    createCanvas(400, 300);
}


/**
 * Creates a 2D array of the given dimension and fills each item with the 
 * provided message
 * @param {number} numRows The number of rows in the grid (i.e. the length of the outer array)
 * @param {number} numCols The number of columns in the grid (i.e. the length of each nested array)
 * @param {String} message The message to store in each position.
 * @returns {String[][]} A 2D array
 * @example
 * // returns [["Hi", "Hi"], ["Hi", "Hi"], ["Hi", "Hi"]]
 * gridOfStrings(3, 2, "Hi");
 */


/**
 * Calculates the total of 2D array.
 * @param {number[][]} arr A 2D array of numbers
 * @returns {number} The total of all items in the array
 * @example 
 * // returns 22
 * sumAll([1, 3], [3, 4], [5, 6])
 */


/**
 * Sums the inner arrays in a 2D array of numbers.
 * @param {number[][]} arr A 2D array of numbers
 * @returns {number[]} A 1D array containing the total of each inner array
 * @example 
 * // returns [4, 7, 11]
 * sumInner([1, 3], [3, 4], [5, 6])
 */


/**
 * Reverses the order of the nested arrays. The order of items within each nested array is
 * preserved.
 * @param {any[][]} arr The 2D array to flip
 * @returns {any[][]} A new array with the nested arrays in the reverse order.
 * @example
 * // returns [[7, 8, 9], [4, 5, 6], [1, 2, 3]]
 * flip([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 */