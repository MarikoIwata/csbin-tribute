'use strict';

/*

Using ES6 classes

To test your solutions run
npm t es6_classes
from the command line

*/

/*
Challenge 1

Create a class 'Person'.
Personshould have a constructor that is passed an input of name and saves it
to a property by the same name. Person should also have a method called greet
that returns the string 'hello'.
*/

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return 'hello';
  }
}

/*
Challenge 2

Create a class Developer that creates objects by extending the Person
class. In addition to having a name property and greet method, Developer
should have an introduce method. When called, introduce should return the string
'Hi, my name is [name]'.
*/

class Developer extends Person {
  constructor(name) {
    super(name);
  }

  introduce() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = {
  Person,
  Developer,
};
