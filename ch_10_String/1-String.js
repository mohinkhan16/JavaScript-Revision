

//charAt()

let person="Alice";
console.log("charat :",person.charAt(0));

//Concat()

let Surname="Jhon";
console.log("concat :",person.concat(" ",Surname));

//endwith
console.log("Inclue :",person.includes("Charlee"));

//indexof
console.log("indexof :",person.indexOf("e"));

//lastindexof
console.log("last index of",person.lastIndexOf("e"));

//length()

console.log("length",person.length);

//Match()

let play="I am playing Football";

console.log("MAtch :-",play.match("am"));

//repeat

console.log("repeat",play.repeat(2));

//replace

console.log("replace :-",play.replace("am","AM"));

//replace all 

console.log("replace all :-",play.replaceAll("a","A"));

//search

console.log("search:-",play.search("A"));

//slice

let book ="This is a book";

console.log("Slice :-",book.slice(2));
console.log("Slice :-",book.slice(0,2));
console.log("Slice :-",book.slice(-1));

//split

console.log("Split:-",book.split(" "))   //with space
console.log("Split:-",book.split(""))   //without space
console.log("Split:-",book.split("i"))   //removing latter


//start with

let text="Good morning";

console.log("Start With:-",text.startsWith("G"));

//substring

console.log("Substring :-",text.substring(1,4));
console.log("Substring :-",text.substring(4,1));
console.log("Substring :-",text.substring(-1));

//upparcash

console.log("Upparcash",text.toUpperCase())


//to lowercash
let animal="DONKEY";

console.log("lowercash",animal.toLowerCase());

//trim


let remove="  hello  this is trim  ";

console.log("Trim:-",remove.length);

console.log("Trim:-",remove.trim().length);

console.log("Trim:-",remove.trimStart().length);

console.log("Trim:-",remove.trimEnd().length);


