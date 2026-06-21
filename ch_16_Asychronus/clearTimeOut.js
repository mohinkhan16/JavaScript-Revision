

let name= setTimeout(()=>{
    console.log("what is your name");
},3000);

setTimeout(() => {
    console.log("my name is mohin");
    clearTimeout(name);
}, 2000);