const express = require("express");

const control = require("../../controllers/controller");
const { validateBody, validateId } = require("../../validates/validate");
const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get(
  "/",
  control.list);

router.get(
  "/:contactId",
  validateId,
  control.getById);

router.post(
  "/",
  validateBody(schemas.addSchema),
  control.add);

router.delete(
  "/:contactId",
  validateId,
  control.remove);

router.put(
  "/:contactId",
  validateId,
  validateBody(schemas.addSchema),
  control.update
);

router.patch(
  "/:contactId/favorite",
  validateId,
  validateBody(schemas.updateSchema),
  control.updateStatus
);

module.exports = router;