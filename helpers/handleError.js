const handleError = (error, _, next) => {
  const { name, code } = error;
  const status = name === 'MongoServerError' && code === 11000 ?
    (409, 'Эта электронная почта уже используется') :
    (400, 'Неверный запрос');
  error.status = status;
  next();
};

module.exports = handleError;
