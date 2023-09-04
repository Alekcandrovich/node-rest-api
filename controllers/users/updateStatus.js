const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');

const updateStatus = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Не найдено');
  }

  console.log(result);
  res.json(result);
};

module.exports = updateStatus;