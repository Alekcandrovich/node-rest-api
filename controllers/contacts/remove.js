const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
    res.json({ message: "Contact deleted" });
    console.log("Сontact successfully deleted");
};

module.exports = remove;