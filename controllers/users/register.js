const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const sendMail = require('../../services/sendMail');

const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const crypto = require('crypto');

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Эта электронная почта уже используется');
  }

  const verifyToken = crypto.randomUUID();

  const avatarURL = gravatar.url(email);
  const result = await User.create({
    ...req.body,
    password: hash,
    avatarURL,
    verifyToken,
  });

  await sendMail({
    to: email,
    subject: `Подтверждение электронной почты`,
    text: `Чтобы подтвердить регистрацию, нажмите на ссылку ниже\n
    href='${BASE_URL}/api/registr/${verifyToken}`,
    html: `<p style='color: #0000ff;'>Чтобы подтвердить регистрацию, нажмите на ссылку ниже</p>
    <p>
    <a href='${BASE_URL}/api/registr/${verifyToken}'>Подтвердить</a>
    </p>`,
  });

  res.status(201).json({
    user: {
      email,
      subscription: result.subscription,
      avatarURL,
    },
  });
};

module.exports = register;