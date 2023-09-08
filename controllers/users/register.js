const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');

const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const register = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Эта электронная почта уже используется');
  }

  const avatarURL = gravatar.url(email);
  const result = await User.create({ ...req.body, password: hash, avatarURL });
  res.status(201).json({
    user: {
      email,
      subscription: result.subscription, avatarURL
    },
  });
};

module.exports = register;