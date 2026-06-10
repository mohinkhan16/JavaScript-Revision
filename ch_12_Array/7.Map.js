

let number =[1,2,3,4,5,6,7,8,9];

console.log(number);

let numbers=number.map((numbers)=>numbers*2);

console.log(numbers);

let Person=[
    {name :"Smarth",age:21,city:"vadodra",profession:"Doctor"},
    {name :"Priya",age:23,city:"Ahemdabad",profession:"Teacher"},
    {name :"Yash",age:27,city:"Baroda",profession:"Hair Stylest"},
    {name :"Dhyey",age:31,city:"Mumbai",profession:"Graphic desiner"},
    {name :"Jay",age:34,city:"Pune  ",profession:"Bussiness men"},

];

const PersonName =Person.map((Person)=>{
    return Person.name;
})

console.log(PersonName)