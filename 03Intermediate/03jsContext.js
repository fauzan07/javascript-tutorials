// context tutorial

var contextObj = {
  invokeThisObj() {
    return this;
  },
};
console.log("2ns position of ", contextObj.invokeThisObj);

class contextObj2 {
  constructor(a) {
    this.a = a;
  }

  invokeThisObj2() {
    return this;
  }
}
var inst = new contextObj2(1);
console.log(inst.invokeThisObj2());
var inst2 = new contextObj2(5);
console.log(inst2.invokeThisObj2());
