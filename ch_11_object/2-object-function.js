function PersonDetails(name, id, age, surname){
    this.name = name;
    this.id = id;
    this.age = age;
    this.surname = surname;
}

const PersonDetails1 = new PersonDetails("Mohin", 101, 20, "Pathan");

console.log("this is person 1 details",PersonDetails1);

const PersonDetails2 = new PersonDetails("Ajay", 102, 21, "A");

console.log("this is person 2 details",PersonDetails2)