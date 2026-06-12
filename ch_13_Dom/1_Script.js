let heading = document.getElementById("Heading");

heading.textContent = "this is heading";


//by class name
const para = document.getElementsByClassName("para");

para[0].textContent = "This is class";
para[1].textContent = "other paragraph";


//tag
let h5 = document.getElementsByTagName("h5");
h5[0].textContent = "Changed by JavaScript";

//by query
let title = document.querySelector(".title");
title.textContent = "Changing Heading";

//QueryselectorAll
let titles = document.querySelectorAll(".title");

titles.forEach((item) => {
    item.textContent = "Changed";
});

//btn

let btn=document.getElementById("click");

btn.addEventListener("click", () => {
    btn.textContent="Button click succesfully "
});

//form

let form =document.getElementById("form");

form.addEventListener("submit",(e)=>{
    event.preventDefault();

    let name=document.getElementById("name").value;

    document.getElementById("result").textContent="form submitted successfully";
});