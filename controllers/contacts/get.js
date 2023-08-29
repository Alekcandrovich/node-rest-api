const { Contact } = require('../../models/contact');

const list = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = null } = req.query;
  const skip = (page - 1) * limit;
  const query = { owner };

  if (favorite !== null) {
    query.favorite = favorite;
    console.log(query);
  }

  const result = await Contact.find(query, {
    skip,
    limit,
  }).populate('owner', 'email');
  console.log(result);
  res.json(result);
};

module.exports = list;
