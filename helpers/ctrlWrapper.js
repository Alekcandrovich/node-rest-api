const ctrlWrapper = (control) => {
  const wrap = async (req, res, next) => {
    try {
      await control(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return wrap;
};

module.exports = ctrlWrapper;