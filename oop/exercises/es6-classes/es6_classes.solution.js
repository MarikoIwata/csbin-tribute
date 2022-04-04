'use strict';

/*

Using ES6 classes

*/

/*
Challenge 1

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
