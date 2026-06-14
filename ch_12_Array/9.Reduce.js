
let numbers=[1,2,3,4,5,6,7,8,9];

console.log(numbers);

const Number=numbers.reduce((acc,cuu)=>{
    return (acc+=cuu);
},)

console.log(Number)


const productDetails = [
  { productName: "Laptop", price: 1200,  stock: 15 },
  { productName: "Office Chair", price: 250,  stock: 30 },
  { productName: "Smartphone", price: 800,  stock: 25 },
  { productName: "Desk Lamp", price: 45,  stock: 50 },
  { productName: "Backpack", price: 60,  stock: 40 },
];


const total=productDetails.reduce((acc,cur)=>{
    return (acc=acc+cur.price);
},0);

console.log(total);