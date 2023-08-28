const ctrlWrapper = require("../../helpers/ctrlWrapper");

const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const updateStatus = require("./updateStatus");

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  register: ctrlWrapper(register),
  updateStatus: ctrlWrapper(updateStatus),
};
