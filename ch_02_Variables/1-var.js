
//variable can be re-declared & update.Afunction scope variaable.

var name="Mohin";
console.log(name)

//Re-declare.
var a=10;
var a=20;

console.log(a);

//Re-assign..
var city="Bhavnagar"
city="Mumbai"

console.log(city);

//function Scope

if(true){
    var x=100;
}

console.log(x)