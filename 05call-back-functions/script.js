// What is a Callback?
// A callback is a function that is executed after another function has finished executing. 
// As we have studied earlier that functions are objects. 
// Functions can take functions as arguments and can be returned by other functions. 
// Functions that take another function as an argument are called higher-order functions. So, 
// the callback function can also be defined as any function that is passed as an argument is called a callback function.


// Pretend that this response is coming from the server
// const students = [
//     {name: "ajam", subject: "JavaScript"},
//     {name: "junaid", subject: "Bootstrap"}
// ]


// function enrollStudent(student, callback){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 1000);
// }


// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 3000);
// }

// let newStudent = {name:"mohammed", subject:"react"}
// enrollStudent(newStudent, getStudents);
// getStudents();



// using promise 
// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()