const ctrlWrapper = require('../../helpers/ctrlWrapper');

const get = require('./get');
const login = require('./login');
const logout = require('./logout');
const register = require('./register');
const updateStatus = require('./updateStatus');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('../../services/verifyEmail');
const resend = require('../../services/resend');

module.exports = {
  getCurrent: ctrlWrapper(get),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  register: ctrlWrapper(register),
  updateStatus: ctrlWrapper(updateStatus),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resend: ctrlWrapper(resend)
};