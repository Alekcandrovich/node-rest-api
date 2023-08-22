const validate = (schema) => {
  const func = async (req, _, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  };
  return func;
};

module.exports = validate;