const express = require('express');

const control = require('../../controllers/contacts');
const { schemas } = require('../../models/contact');
const {
  validateBody,
  isValidId,
  auth
} = require('../../middlewares');


const router = express.Router();

router.get(
  '/',
  control.list
);

router.get(
  '/:contactId',
  auth,
  isValidId,
  control.getById
);

router.post(
  '/',
  auth,
  validateBody(schemas.addSchema),
  control.add
);

router.delete(
  '/:contactId',
  auth,
  isValidId,
  control.remove
);

router.put(
  '/:contactId',
  auth,
  isValidId,
  validateBody(schemas.addSchema),
  control.update
);

router.patch(
  '/:contactId/favorite',
  auth,
  isValidId,
  validateBody(schemas.updateSchema),
  control.updateStatus
);

module.exports = router;