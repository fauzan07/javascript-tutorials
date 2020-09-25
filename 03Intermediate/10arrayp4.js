// Slice & Splice in Javascript
var array = [11, 12, 3, 4, 5];

console.log("Original Array ", array);

// slice removes elements from array , starting from index mentioned in 1st arg of slice and ending one positon before 2nd arg of slice
var array2 = array.slice(1);
console.log("Modified Array ", array2);
//console.log(array);

//splice removes elements from array starting from index in first arg and 2nd arg shows no of elements to remove.
var array3 = array.splice(1, 3, "Hi");
console.log("After Splice");
console.log(array3, " ", array);

// main difference is slice doesn't affects the original array while splice will modify the o.g array
