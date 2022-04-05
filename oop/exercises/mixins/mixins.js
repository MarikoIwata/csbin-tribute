'use strict';

/*

EXTENSION: MIXINS

to test your solutions run
npm t mixins
from the command line

*/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
  },
};

let robotFido = new Dog();

// robotFido = /* Put code here to give Fido robot skills */;

// /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"
module.exports = Dog;
