// functions in javascript

//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

<h1>Function Declaration</h1>

function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();

//The call showMessage() executes the code of the function. Here we will see the message two times.
//This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.
//If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.

//-------------------------------------------------------------------------------------------------------------------------------//

<h1>Local variables</h1>
// A variable declared inside a function is only visible inside that function.

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert( message );
}

showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- Error! The variable is local to the function

//-------------------------------------------------------------------------------------------------------------------------------//

<h1>Outer variables</h1>
//A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

//---------------------------------------------//
//The function has full access to the outer variable. It can modify it as well.
//For instance:

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function

//---------------------------------------------//
//The outer variable is only used if there’s no local one.
//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName.
//The outer one is ignored:
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable

//-------------------------------------------------------------------------------------------------------------------------------//

<h1>Global variables</h1>
//Variables declared outside of any function, such as the outer userName in the code above, are called global.

//Global variables are visible from any function (unless shadowed by locals).

//It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. 
//Sometimes though, they can be useful to store project-level data.

//-------------------------------------------------------------------------------------------------------------------------------//

// <h1>Parameters</h1> 
//We can pass arbitrary data to functions using parameters (also called function arguments) .
//In the example below, the function has two parameters: from and text.

function showMessage(from, text) { // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)


//-------------------------------------------------------------------------------------------------------------------------------//

<h2>Returning a value</h2>
//A function can return a value back into the calling code as the result.
//The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3

//---------------------------------------------//
//The directive return can be in any place of the function. When the execution reaches it,
//the function stops, and the value is returned to the calling code (assigned to result above).
//There may be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

//---------------------------------------------//
//It is possible to use return without a value. That causes the function to exit immediately.
//For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}

//-------------------------------------------------------------------------------------------------------------------------------//


var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break;
    case "subadmin":
      return `${name} is subadmin with access to create & delete courses`;
      break;
    case "testprep":
      return `${name} is testprep with access to create & delete test`;
      break;
    case "user":
      return `${name} is user with view access`;
      break;
    default:
      return "is a trial user";
      break;
  }
};

console.log(getUserRole("fauzan", "user"));
