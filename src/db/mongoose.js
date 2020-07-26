const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect(process.env.DEV_DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = mongoose;
