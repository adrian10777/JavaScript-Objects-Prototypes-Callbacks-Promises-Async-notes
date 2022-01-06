//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parse(person3){
    for (foods in person3){
        console.log(` ${foods}: ${person3[k]}`);
    } 
}

console.log(Object.keys(person3));
console.log(Object.values(person3));

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

let person = (name, age) => {
    this.name = name;
    this.age = age;
}

// Use an arrow to create the printInfo method
let printInfo = () => {
    console.log(`Hello ${name}, you look like you are about ${age} old!`);
}

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

this.addAge = () => {
    this.age=age+3
    console.log(`Hello ${name}, you look like you are about ${age} old!`);
}

let adrian_henriquez = new person(' Adrian Henriquez', '23')
let lisbeth_henriquez = new person(' Lisbeth Henriquez', '23')

adrian_henriquez.printInfo();
adrian_henriquez.newAge();
lisbeth_henriquez.printInfo();
lisbeth_henriquez.newAge();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/