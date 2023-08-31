// const { Contact } = require('../../models/contact');

// const list = async (req, res) => {
//   const { _id: owner } = req.user;
//   const { page = 1, limit = 20 } = req.query;
//   const skip = (page - 1) * limit;
//   const result = await Contact.find(owner, { skip, limit, }).populate('owner', 'name email');
//   console.log(result);
//   res.json(result);
// };

// module.exports = list;


const { Contact } = require("../../models/contact");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(owner);
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = add;