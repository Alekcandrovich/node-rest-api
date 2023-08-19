const express = require("express");

const param = require("../../params/params.js");
const validate = require("../../validate/validate.js");
const schemas = require("../../schemas/contacts.js");

const router = express.Router();

router.get("/", param.listContacts);

router.get("/:contactId", param.getContactById);

router.post("/", validate(schemas.schema), param.addContact);

router.delete("/:contactId", param.removeContact);

router.put("/:contactId", validate(schemas.schema), param.updateContact);

module.exports = router;