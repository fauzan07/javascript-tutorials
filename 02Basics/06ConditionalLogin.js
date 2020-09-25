// code for conditionally login

var email = false;
var google = false;
var facebook = false;

if (email || google || facebook) {
  console.log("Login Sucess");
} else {
  console.log("Login Failed");
}