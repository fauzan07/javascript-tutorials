var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log("Original Array", testArray);

console.log("After using fill", testArray.fill("K", 3, 7));

// Array.fill fills all the elements of given array with value provided .
// If 2nd and 3rd argument is provided it starts fr filling from that position and ends 1position before 3 rd arg.

// Array.filter filters out those elements from array which meet the condition given in the callback and returns a new array.

// Pick those numbers from array which are greater than 10
const array2 = [11, 5, 4, 10, 20, 25, 30];
const result = array2.filter((x) => x > 10);
console.log("Original Array", array2);
console.log("Result", result);
