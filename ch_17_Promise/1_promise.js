const items = new Promise((resolve,reject)=>{
    
    let product=["sunscreen","FashWash"];

    // product=[];

    setTimeout(()=>{
        if(product.length===0){
            reject("No product found");
        }else{
            resolve(" please Product to check out ");
        }
    },2000);
});

items
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });