const { User } = require('../models/user');
const { HttpError } = require('../helpers');

const verifyEmail = async (req, res) => {
  const { verifyToken } = req.params;
  const user = await User.findOne({ verifyToken });
  if (!user) {
    throw HttpError(401, 'Не найдено');
  }
  await user.findByIdAndUpdate(user._id, { verify: true, verifyToken: '' });
  res.json({
    message: 'Пользователь успешно подтвержден'
  })
};

module.exports = verifyEmail;
