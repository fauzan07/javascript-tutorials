var arr = ["India", "USA", "Japan", "Russia"];
var arr2 = new Array("Jaipur", "Mumbai", "Pune", "Bengaluru");
// console.log(arr);
// console.log("Array Length:", arr.length);
// console.log(arr2[0]);

// Push & Pop array values
arr2.pop();
console.log(arr2, " ,length : ", arr2.length);
arr2.push("Mysore");
console.table(arr2);

// Shift & Unshift Values of Array
console.time(); // to calculate time taken for operation to perform
arr2.unshift("Indore");
console.log("After unshift: ", arr2);
arr2.shift();
console.log(arr2);
console.timeEnd();

// Index Of in array
console.log(arr2.indexOf("Indore")); // returns -1 if value is not present in the array

// Array.from
console.log(Array.from("Fauzan Falke"));
console.log(Array.from([2, 3, 4], (x) => x * x));
var arr3 = "JavaScript";
console.log(Array.from(arr3, (x) => x + 5));
