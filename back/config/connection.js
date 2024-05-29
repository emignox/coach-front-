const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.URI_TEST, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

module.exports = mongoose;
