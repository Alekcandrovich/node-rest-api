const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const contactsRouter = require('./routes/api/contacts.js');
const usersRouter = require('./routes/api/users.js');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/contacts', contactsRouter);
app.use('/api/users', usersRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Не найдено' });
});

app.use((err, _, res, __) => {
  const { message = "Неожиданная ошибка сервера" } = err;
  res.status(500).json({ message, stack: err.stack });
});

module.exports = app;