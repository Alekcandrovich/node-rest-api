const contacts = require("../models/contacts");

const listContacts = async (_, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.json(result);
  }
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body.contact);
  res.status(201).json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.json({ message: "contact deleted" });
  }
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.json(result);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};