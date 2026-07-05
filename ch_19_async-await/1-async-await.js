
const item=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" i want somthing sweet");
        },3000)
    });
}


async function data() {
    console.log("which type sweet do you wont");

    const data = await item();

    console.log(data)
}

data();