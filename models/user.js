const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleError } = require('../helpers');

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const subscriptions = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Адрес электронной почты'],
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: [true, 'Пароль пользователя'],
    },
    subscription: {
      type: String,
      enum: subscriptions,
      default: 'starter',
    },
    token: {
      type: String,
      default: '',
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleError);

const regSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid(...subscriptions),
});

const logSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const updateSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptions)
    .required(),
});

const User = model('user', userSchema);

const schemas = {
  regSchema,
  logSchema,
  updateSchema
};

module.exports = {
  User,
  schemas
};