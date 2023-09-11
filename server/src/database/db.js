const mongoose = require("mongoose");

const conn = () => {
  mongoose.connect(process.env.URI);
  console.log("Connected to Mongoodb");
};

module.exports = { conn };
