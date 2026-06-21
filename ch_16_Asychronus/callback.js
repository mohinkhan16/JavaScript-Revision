

function details(info){
    console.log(info)
}

function person(name,id,Work){
    const info= name+id;

    Work(info);
}

person("Ishan",1,details);;



function infromation(result){
console.log(result);
}

function person(name,id,Details){
    const info = name + id;

    Details(info);
}

person("Mihant",1,infromation);

