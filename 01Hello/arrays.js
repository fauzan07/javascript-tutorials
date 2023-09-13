// Arrays in JavaScript are a fundamental data structure used to store collections of values. 
// They can hold various data types, including numbers, strings, objects, functions, and even other arrays. 
// Arrays in JavaScript are zero-indexed, which means the first element is at index 0, 
// the second element is at index 1, and so on.

// Creating an Array:
// You can create an array using either array literals or the Array constructor.

// Using array literals
const fruits = ["apple", "banana", "cherry"];

// Using the Array constructor
const colors = new Array("red", "green", "blue");

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"

// Modifying Elements:
// You can change the value of an array element by assigning a new value to it.

fruits[2] = "strawberry";
console.log(fruits); // ["apple", "banana", "strawberry"]

// Array Length:
// You can find the number of elements in an array using the length property.

console.log(fruits.length); // 3

// Array Methods:
// JavaScript provides a variety of methods to manipulate arrays. Some common array methods include:

// push(): Add an element to the end of the array.
// pop(): Remove the last element from the array.
// unshift(): Add an element to the beginning of the array.
// shift(): Remove the first element from the array.
// concat(): Concatenate two or more arrays.
// slice(): Create a new array by slicing a portion of an existing array.
// splice(): Add or remove elements from an array at a specified position.
// forEach(): Iterate over the array elements.
// map(): Create a new array by applying a function to each element of an existing array.
// filter(): Create a new array with elements that pass a specified condition.
// reduce(): Reduce an array to a single value using a callback function.
// find(): Find the first element that satisfies a condition.
// indexOf(): Find the index of a specified element.
// includes(): Check if an array contains a specified element.


// push(): Adds one or more elements to the end of an array and returns the new length of the array.
const fruits = ["apple", "banana"];
fruits.push("cherry", "date");
console.log(fruits); // ["apple", "banana", "cherry", "date"]

// pop(): Removes and returns the last element from an array.
const fruits = ["apple", "banana", "cherry"];
const lastFruit = fruits.pop();
console.log(lastFruit); // "cherry"
console.log(fruits); // ["apple", "banana"]

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
const fruits = ["banana", "cherry"];
fruits.unshift("apple", "date");
console.log(fruits); // ["apple", "date", "banana", "cherry"]

// shift(): Removes and returns the first element from an array.
const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits.shift();
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "cherry"]

// concat(): Combines two or more arrays and returns a new array.
const fruits = ["apple", "banana"];
const color = ["red", "green"];
const combined = fruits.concat(color);
console.log(combined); // ["apple", "banana", "red", "green"]

// slice(): Returns a shallow copy of a portion of an array into a new array.
const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1, 3); // from index 1 (inclusive) to 3 (exclusive)
console.log(slicedFruits); // ["banana", "cherry"]

// splice(): Adds or removes elements from an array at a specified index.
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "grape"); // Remove 1 element at index 1 and insert "grape"
console.log(fruits); // ["apple", "grape", "cherry"]

// indexOf(): Returns the first index at which a given element is found in the array, or -1 if it's not found.
const fruits = ["apple", "banana", "cherry"];
const index = fruits.indexOf("banana");
console.log(index); // 1

// includes(): Checks whether an element exists in the array and returns true or false.
const fruits = ["apple", "banana", "cherry"];
const hasCherry = fruits.includes("cherry");
console.log(hasCherry); // true

// Iterating Through an Array:
// You can loop through the elements of an array using for loops, forEach(), for...of, or other looping constructs.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((fruit) => {
  console.log(fruit);
});

for (const fruit of fruits) {
  console.log(fruit);
}




