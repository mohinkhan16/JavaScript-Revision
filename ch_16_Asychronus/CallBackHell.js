

function login(){
    setTimeout(function(){
        console.log("login succesfully");
    },1000)
}

login();

function menu(){
    setTimeout(function(){
        console.log("Display menu");
    },2000)
}

menu();

function order(){
    setTimeout(function(){
        console.log("Order pizza successfully");
    },3000)
}

order();

function paymet(){
    setTimeout(function(){
        console.log("payment done successfully");
    },4000)
}

paymet();


function ordersuceessfully(){
    setTimeout(() => {
        console.log("your order succesfully surver")
    },5000);
}


login(()=>{
    menu(()=>{
        order(()=>{
            paymet(()=>{
                ordersuceessfully();
            }
            )
        })
    })
})