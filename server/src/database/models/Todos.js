const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;
