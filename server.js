const mongoose = require('mongoose');
const app = require('./app.js');

const DB_HOST = 'mongodb+srv://vadim:K7MUuaXcmiGL8zhM@cluster0.zn74clk.mongodb.net/db-contacts?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
  app.listen(3000)
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
})