const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const update = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Не найдено');
  }
  console.log(result);
  res.json(result);
};

module.exports = update;