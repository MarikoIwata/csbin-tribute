'use strict';

/*

Using the 'new' keyword

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

Add a greet method to Person's prototype, so that objects created using
new keyword + Person have ACCESS to it, but do not have it as a direct "own" property

*/

Person.prototype.greet = function greet() {
    return `Hi, my name is ${this.name}`;
};

module.exports = Person;
