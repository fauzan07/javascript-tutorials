// what is event bubbling in java script
// exmaple of event bubbling


   
<form onclick="alert('form')">FORM
<div onclick="alert('div')">DIV
  <p onclick="alert('p')">P</p>
</div>
</form>


// WHat is closer in  javascript
// example of closer function


var i = 10;
function outer(){
    var j = "j a local variable of outer function";
    document.write(j + "</br>");
        function inner(){
            var i ="i a local variable of inner function"
            document.write(i + "</br>");
            document.write(j + "</br>");
        }
        inner();
        document.write(i + "</br>");

}

outer();


