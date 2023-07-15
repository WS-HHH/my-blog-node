const Users = require('../model/users.js');

const getUsersList = async () => {
  const res = await Users.getUsersList();

  return res;
}

module.exports = {
  getUsersList,
}