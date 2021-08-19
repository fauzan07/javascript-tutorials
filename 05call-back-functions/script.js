// What is a Callback?
// A callback is a function that is executed after another function has finished executing. 
// As we have studied earlier that functions are objects. 
// Functions can take functions as arguments and can be returned by other functions. 
// Functions that take another function as an argument are called higher-order functions. So, 
// the callback function can also be defined as any function that is passed as an argument is called a callback function.


// Pretend that this response is coming from the server
const students = [
    {name: "aquib", subject: "JavaScript"},
    {name: "haris", subject: "Bootstrap"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}


function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name:"salim", subject:"react"}
enrollStudent(newStudent, getStudents);
// getStudents();