// switch case for printing according to roles
var user = "ak";

switch (user) {
  case "admin":
    console.log("full access");
    break;
  case "user":
    console.log("access to consume content");
    break;

  case "testprep":
    console.log("full access to see test");
    break;
  case "subadmin":
    console.log("full access to create or delete course");
    break;

  default:
    console.log("trial user");
    break;
}
