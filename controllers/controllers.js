const { Contact } = require("../models/contacts");
const { httpError } = require("../errors/errors");

const list = async (_, res) => {
  const result = await Contact.find();
  console.log(result);
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const update = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json(result);
};

const updateStatus = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  list,
  getById,
  add,
  remove,
  update,
  updateStatus,
};
