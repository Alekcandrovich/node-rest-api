const express = require("express");

const control = require("../../controllers/controllers.js");
const validate = require("../../validate/validate.js");
const schemas = require("../../schemas/contacts.js");

const router = express.Router();

router.get("/", control.listContacts);

router.get("/:contactId", control.getContactById);

router.post("/", validate(schemas.schema), control.addContact);

router.delete("/:contactId", control.removeContact);

router.put("/:contactId", validate(schemas.schema), control.updateContact);

module.exports = router;