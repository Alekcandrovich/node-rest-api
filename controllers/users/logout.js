const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const logout = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById({ _id });
  if (!user) {
    throw HttpError(401, "Не авторизован");
  }
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204).json({ message: "Вы успешно вышли из аккаунта" });
};

module.exports = logout;
