

//join retrun new string

let frutes=["Mango","Banana","Apple","Oragne"];

console.log(frutes.join());

console.log(frutes.join(" "));


// 2.join

let veges=["Domestick","Ginger","Poteto","tameto"]

console.log(veges.join(" "));
console.log(veges.join());


//flat method

let number=[1,2,3,4,5,[6,7,8,9],10];

console.log(number.flat());


let number2=[1,2,[3,4,5,[6,7,8,9,[10,12]]]]

console.log(number2.flat(3));

let number3=[1,2,[3,4,5,[6,7,8,9,[10,12,[13,14,15,[16,17,18,[19,20]]]]]]];

console.log(number3.flat(Infinity));


//slice

let bike =["BMW","Splinder","Activa"];

console.log(bike.slice(0,2));


//some

let numbers=[1,2,3,4,5,6,7,8,9,10];

const result = numbers.some((x)=>{
    return x>10;
})

console.log(result);

//reverse 

console.log(numbers.reverse());