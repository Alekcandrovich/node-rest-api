const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleError } = require('../helpers');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Введите имя контакта'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', handleError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoritSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model('contact', contactSchema);

const schemas = {
  addSchema,
  updateFavoritSchema,
};

module.exports = {
  Contact,
  schemas,
};
