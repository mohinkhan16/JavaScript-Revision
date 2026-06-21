

const checkDate=()=>{
    console.log("checking current Date");

    setTimeout(()=>{
        const currentDate = new Date().getDate();

        console.log("current date is",currentDate);
    },5000);
}


checkDate();