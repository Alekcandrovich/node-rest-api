const express = require('express');

const control = require('../../controllers/contacts');
const { validateBody, isValidId } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', control.list);

router.get('/:contactId', isValidId, control.getById);

router.post('/', validateBody(schemas.addSchema), control.add);

router.delete('/:contactId', isValidId, control.remove);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.addSchema),
  control.update
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.updateSchema),
  control.updateStatus
);

module.exports = router;
