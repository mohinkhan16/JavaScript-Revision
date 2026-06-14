
//filter

const number=[1,2,3,4,5,6,7,8,9,10];

console.log(number);

const evenNumber =number.filter((number)=> number %2===0);

console.log(evenNumber);


const Person=[
    {name :"Smarth",age:21,city:"vadodra",profession:"Doctor"},
    {name :"Priya",age:23,city:"Ahemdabad",profession:"Teacher"},
    {name :"Yash",age:27,city:"Baroda",profession:"Hair Stylest"},
    {name :"Dhyey",age:31,city:"Mumbai",profession:"Graphic desiner"},
    {name :"Jay",age:34,city:"Pune  ",profession:"Bussiness men"},

];


const people= Person.filter((x)=>x.age >20);

console.log(people);
