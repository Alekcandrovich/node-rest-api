const express = require('express');

const control = require('../../controllers/users');
const { schemas } = require('../../models/user');

const { validateBody, auth, upload } = require('../../middlewares');

const router = express.Router();

router.post('/register', validateBody(schemas.regSchema), control.register);

router.get('verify/:verifyToken', control.verify);

router.post(
  '/verify',
  validateBody(schemas.emailSchema),
  control.resend
);

router.post('/login', validateBody(schemas.logSchema), control.login);

router.post('/logout', auth, control.logout);

router.get('/current', auth, control.getCurrent);

router.patch(
  '/',
  auth,
  validateBody(schemas.updateSchema),
  control.updateStatus
);

router.patch('/avatars', auth, upload.single('avatar'), control.updateAvatar);

module.exports = router;
