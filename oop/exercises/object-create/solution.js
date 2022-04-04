/*

Using Object.create

*/

const personStore = {
    greet() {
        return 'hello';
    },
};

function person(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

personStore.introduce = function () {
    return `Hi, my name is ${this.name}`;
};

module.exports = {
    personStore,
    person,
};
