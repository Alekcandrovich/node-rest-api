const {
  list,
  getById,
  add,
  remove,
  update,
  updateStatus,
} = require("./controllers");

const { wrapper } = require("../errors/errors");

module.exports = {
  list: wrapper(list),
  getById: wrapper(getById),
  add: wrapper(add),
  remove: wrapper(remove),
  update: wrapper(update),
  updateStatus: wrapper(updateStatus),
};
