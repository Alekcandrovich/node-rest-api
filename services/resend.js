const { User } = require('../models/user');
const { HttpError } = require('../helpers');
const sendMail = require('./sendMail');

const { BASE_URL } = process.env;

const resend = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Не найдено');
  }
  if (user.verify) {
    throw HttpError(401, 'Адрес электронной почты уже подтвержден');
  }
  await sendMail({
    to: email,
    subject: `Подтверждение электронной почты`,
    text: `Чтобы подтвердить регистрацию, нажмите на ссылку ниже\n
    href='${BASE_URL}/api/registr/${user.verifyToken}`,
    html: `<p style='color: #0000ff;'>Чтобы подтвердить регистрацию, нажмите на ссылку ниже</p>
    <p>
    <a href='${BASE_URL}/api/registr/${user.verifyToken}'>Подтвердить</a>
    </p>`,
  });

  res.status(200).json({
    message: 'Проверка электронной почты успешно выполнена',
  });
};

module.exports = resend;