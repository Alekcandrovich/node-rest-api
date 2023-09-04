const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers/');

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, 'Не найдено');
  }
  console.log(result);
  res.json(result);
};

module.exports = getById;