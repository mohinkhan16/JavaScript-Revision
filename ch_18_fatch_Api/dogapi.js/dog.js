document.getElementById("btn").addEventListener("click",async()=>{

    const dog =document.getElementById("dog");

    const images=  await fetch("https://dog.ceo/api/breeds/image/random");

    const result=  await images.json();

    if(result.status !=="success"){
 throw new Error("images is not found");
    }else{
        dog.src=result.message;
    }
