require("colors");
const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Не найдено");
  }
  console.log(`Контакт удален`.green.bold);
  res.json({ message: "Контакт успешно удален" });
};

module.exports = remove;