//let cannot be re-declared but can be updated.A block scop variable.
//block scop means we cannot use out side of bresses{}.

//Re-declear is not possiable.
let a=10;
// let a=20;

console.log(a);//give us to error;

//Re-assign is possiable

let name="Ajay";
name="Sumit";

console.log(name);

//Block scop

if(true){
    let mark=50;
}

console.log(mark);

//is not working because is block scop variable..