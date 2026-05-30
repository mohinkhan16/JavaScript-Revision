

function count(number){
    console.log(number);


    if(number>1){
        count(number-1);
    }
}

count(5);