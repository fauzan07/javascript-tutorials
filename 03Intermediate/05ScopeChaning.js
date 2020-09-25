var name = "Kiran";

console.log("line no 3", name);

function showName() {
  name = "Naveen";
  console.log("line no 6", name);
  showName2();
  function showName2() {
    name = "Mikel";
    console.log("line no 9", name);
  }
}

showName();
