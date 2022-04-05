'use strict';

/*

Subclassing

to test your solutions run
npm t subclassing
from the command line

*/

const userFunctionStore = {
  sayType: function () {
    return 'I am a ' + this.type;
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

/*
Challenge 1

Create an object adminFunctionStore that has access to all methods in the
userFunctionStore object, without copying them over individually.

*/

const adminFunctionStore = Object.create(userFunctionStore);

/*
Challenge 2

Create an adminFactory function that creates an object with all the same data
fields (and default values) as objects of the userFactory class, but without
copying each data field individually.

Make sure the value of the 'type' field for adminFactory objects is
'Admin' instead of 'User'.

Make sure that adminFactory objects have access to adminFunctionStore methods,
without copying them over.

*/

function adminFactory(name, score) {
  const admin = Object.assign(
    Object.create(adminFunctionStore),
    userFactory(name, score)
  );

  admin.type = 'Admin';

  return admin;
}

/*
  Challenge 2

  Create a method called sharePublicMessage that returns 'Welcome users!' and will
  be available to adminFactory objects, but not userFactory objects. Do not add
  this method directly in the adminFactory function.

  */
// console.log('adminFunctionStore:', adminFunctionStore.sayType());
// console.log('userFunctionStore:', userFunctionStore);

// const adminFromFactory = adminFactory('Eva', 5);
// console.log('adminFromFactory:', adminFromFactory);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType(); // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"

module.exports = {
  userFunctionStore,
  userFactory,
  adminFactory,
  adminFunctionStore,
};
