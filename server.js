require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app.js");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

try {
  mongoose.connect(DB_HOST);

  app.listen(PORT, () => {
    console.log("Database connection successful");
  });
} catch (error) {
  console.log(error.message);
  process.exit(1);
} finally {
  mongoose.disconnect();
}

