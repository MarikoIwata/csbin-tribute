/*

Using Object.create

To test your solutions run
npm t object_create
from the command line

*/

/*
Challenge 2

Inside personStore object, create a property greet where the value is
a function that returns the string "hello".
*/

const personStore = {};

/*
Challenge 3

Create a function person that takes as input a name and an age.
When called, the function will create person objects using the Object.create
method on the personStore object.
*/

function person(name, age) {}

/*
Challenge 4

Without editing the code you've already written, add an introduce
method to the personStore object that returns the string "Hi, my name is [name]".
below
*/

// add your code for challenge 4 here

module.exports = {
    personStore,
    person,
};
