//1.syntax error

const variable=10;   

console.log(variable);

//2.try-catch-finally

try{
    let age=17;

    if(age<18){
        throw"you are not eligible";
    }

    console.log("you are eligible");
}catch(error){
    console.log(error);
}finally{
    console.log("what's your age");
}