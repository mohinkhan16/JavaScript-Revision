
// Promise chaining means executing asynchronous operations one after another.
//producing code

const car = new Promise((resolve,reject)=>{

    let name=["BMW","Odi"];

    setTimeout(()=>{
         
        if(name.length > 0){
            resolve(name);
        }else{
            reject("no cars available");
        }
    },2000)
});

//consuming code

car.then((name)=>{
        return  new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(name);
                console.log("Bmw speed is 120,odi speed is 100");
            },2000);
        });
})

.then((name)=>{
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const price=true;
        if(price){
            console.log("BMW price is 50L,odi price is 35L");
            resolve(name);
        }else{
            reject("price is not available");
        }
    },3000);
});
})

.then((name)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order successfully");
            resolve(name);
        },2000)
    });
})

.then((name)=>{
    console.log("Delivery done",name);
})

.catch((err)=>{
    console.log("Error",err);
})

.finally(()=>{
    console.log("Process complete");
})


// Promise chaining means executing asynchronous operations one after another.  
//producing code

const car = new Promise((resolve,reject)=>{

    let name=["BMW","Odi"];

    setTimeout(()=>{
         
        if(name.length > 0){
            resolve(name);
        }else{
            reject("no cars available");
        }
    },2000)
});

//consuming code

car.then((name)=>{
        return  new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(name);
                console.log("Bmw speed is 120,odi speed is 100");
            },2000);
        });
})

.then((name)=>{
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const price=true;
        if(price){
            console.log("BMW price is 50L,odi price is 35L");
            resolve(name);
        }else{
            reject("price is not available");
        }
    },3000);
});
})

.then((name)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order successfully");
            resolve(name);
        },2000)
    });
})

.then((name)=>{
    console.log("Delivery done",name);
})

.catch((err)=>{
    console.log("Error",err);
})

.finally(()=>{
    console.log("Process complete");
})