const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});


  // {
  //   name: {
  //     type: String,
  //     required: [true, 'Set name for contact'],
  //   },
  //   email: {
  //     type: String,
  //   },
  //   phone: {
  //     type: String,
  //   },
  //   favorite: {
  //     type: Boolean,
  //     default: false,
  //   },
  // }

module.exports = { schema };