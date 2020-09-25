var user = {
  fName: "Fauzan",
  lName: "Falke",
  role: "Admin",
  loginCount: 32,
  isFbLogin: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.fName} has enrolled for ${this.courseList.length} courses`;
  },
  getInfo: function () {
    return `First Name: ${this.fName} \nLast Name : ${this.lName}\nRole : ${this.role}\nLogin Count :${this.loginCount}\nFb Login : ${this.isFbLogin}\nCourse List : ${this.courseList}
   
    `;
  },
};
console.log(user.fName);
console.log(user.getCourseCount());
user.buyCourse("C++");
user.buyCourse("Java");
user.buyCourse("ReactJs");
console.log(user.getCourseCount());
//console.log(user.getCourseList());
console.log(user.getInfo());
