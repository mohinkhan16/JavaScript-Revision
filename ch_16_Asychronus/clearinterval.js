

let name = setInterval(()=>{
    console.log("what is your name");
},2000);

setTimeout(()=>{
    clearInterval(name);
    console.log("My name is shan");
},5000)