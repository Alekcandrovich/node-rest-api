const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleError } = require('../helpers');

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const subscriptions = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 8,
      required: [true, 'Пароль пользователя'],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Адрес электронной почты'],
      unique: true,
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
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleError);

const registerSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid(...subscriptions),
});

const loginSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const updateStatusSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptions)
    .required(),
});

const User = model('user', userSchema);

const schemas = { registerSchema, loginSchema, updateStatusSchema };

module.exports = { User, schemas };
