'use strict';

/*

Using the 'new' keyword

To test your solutions run
npm t new_keyword
from the command line

*/

/*
Challenge 5

Create a function Person that has parameters 'name' and 'age'
When Person is called with the new keyword it should return an object
with key/value pairs corresponding to the parameter/argument pairs for 'name' and 'age'.

Think about this...
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

/*
Challenge 6

*/

// function personFromConstructor(name, age) {
// add code here
// }

// const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 7 ***/
// add code here

// mike.introduce(); // -> Logs 'Hi, my name is Mike'
module.exports = Person;
