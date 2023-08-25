const { Contact } = require("../../models/contact");

const list = async (_, res) => {
  const result = await Contact.find();
  console.log(result);
  res.json(result);
};

module.exports = list;