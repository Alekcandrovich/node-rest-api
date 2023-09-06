const { ctrlWrapper } = require('../../helpers');

const add = require('./add');
const list = require('./get');
const getById = require('./getById');
const remove = require('./remove');
const update = require('./update');
const updateStatus = require('./updateStatus');

module.exports = {
  add: ctrlWrapper(add),
  list: ctrlWrapper(list),
  getById: ctrlWrapper(getById),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
  updateStatus: ctrlWrapper(updateStatus),
};