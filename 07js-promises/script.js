// What is a Promise?
// A promise in JavaScript is similar to a promises we do in real life. 
// When we make a promise, it is a guarantee that in future, we are going to do something. 
// A promise has two possible outcomes: it will be kept when the time comes, or it will not. 
// Similarly, in JavaScript, when we define a promise, 
// either it will be resolved when the time comes, or it will get rejected. 
// According to MDN, “the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.”

// A promise has three states:

// pending: It is the initial state.
// Fulfilled: It indicates that the promised operation was successful.
// Rejected: It indicates that the promised operation was unsuccessful.

// Promise: Best video on promises
// -resolve
// -reject
// -pending

// promise is javacript object that can be resolve or reject or pending based on condition 

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})