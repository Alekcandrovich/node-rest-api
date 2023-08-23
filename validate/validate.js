const validate = (schema) => {
  const validator = async (req, _, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  };
  return validator;
};

module.exports = validate;