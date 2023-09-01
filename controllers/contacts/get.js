const { Contact } = require('../../models/contact');

const list = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.user);
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner })
    .skip(skip)
    .limit(limit)
    .populate("owner", "email");
  console.log(result);
  res.json(result);
};

module.exports = list;