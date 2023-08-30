const express = require("express");

const control = require("../../controllers/users");
const { schemas } = require("../../models/user");
const { validateBody, auth } = require("../../middlewares");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.regSchema),
  control.register
);

router.post(
    "/login",
    validateBody(schemas.logSchema),
    control.login
);

router.post(
    "/logout",
    auth,
    control.logout
);

router.get(
    "/current",
    auth,
    control.getCurrent
);

router.patch(
  "/",
  auth,
  validateBody(schemas.updateSchema),
  control.updateStatus
);

module.exports = router;
