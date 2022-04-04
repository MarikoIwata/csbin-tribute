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

function Person(name, age) {}

/*
Challenge 6

Add a greet method to Person's prototype, so that objects created using
new keyword + Person have ACCESS to it, but do not have it as a direct "own" property

Example

const me = new Person('Dom', 30); // -> { name: 'Dom, age: 30 }

me.greet() // -> 'Hi, my name is Dom'

*/

module.exports = Person;
