require('colors');

const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Подключение к базе данных выполнено успешно. PORT: ${PORT}`.blue.bold
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });