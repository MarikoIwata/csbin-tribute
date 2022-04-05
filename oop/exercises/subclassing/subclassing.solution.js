'use strict';

/*

Subclassing

*/

const userFunctionStore = {
  sayType: function () {
    return 'I am a ' + this.type;
  },
};

function userFactory(name, score) {
  const user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

/*
Challenge 1

*/

const adminFunctionStore = Object.create(userFunctionStore);

/*
Challenge 2

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

*/

adminFunctionStore.sharePublicMessage = function sharePublicMessage() {
  return 'Welcome users!';
};

module.exports = {
  userFactory,
  adminFactory,
  adminFunctionStore,
};
