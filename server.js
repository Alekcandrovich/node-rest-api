const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST =
  'mongodb+srv://vadim:K7MUuaXcmiGL8zhM@cluster0.zn74clk.mongodb.net/db-contacts?retryWrites=true&w=majority',
       PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });