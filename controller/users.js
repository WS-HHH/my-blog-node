const Users = require('../services/users.js');
const { SuccessModel, ErrorModel } = require('../model/resModel.js');

const getUsersList = async () => {
  try {
    const res = await Users.getUsersList();
    return new SuccessModel(res);
  } catch (error) {
    console.error('[getUsersList.error]', error.message, error.stack);
    return new ErrorModel(error.message);
  }
}


module.exports = {
  getUsersList,
}