
let numbers=[1,2,3,4,5,6,7,8,9];

console.log(numbers);

const Number=numbers.reduce((acc,cuu)=>{
    return (acc+=cuu);
},)

console.log(Number)