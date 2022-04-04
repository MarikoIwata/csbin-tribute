/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
    constructor() {
        // add code here
    }

    // add code here
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 9 ***/

// add code here

// /********* Uncomment these lines to test your work! *********/
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
    sayType: function () {
        console.log('I am a ' + this.type);
    },
};

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = 'User';
    user.name = name;
    user.score = score;
    return user;
}

/*** CHALLENGE 10 ***/

const adminFunctionStore = {
    // add code here
};

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
    // add code here
}

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/

const adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/

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
