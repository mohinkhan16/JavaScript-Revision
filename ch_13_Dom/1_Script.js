
//id


let heading = document.getElementById("Heading");

heading.textContent="this is heading"

console.log(heading);

//by class

const para =document.getElementsByClassName("para");
console.log(para);

para[0].textContent="This is class";


para[1].textContent="other paragraph";

console.log(Para);

//by tag name

let h5 = document.getElementsByTagName("h5");

console.log(h5);

h5[0].textContent = "Changed by JavaScript";

