const express = require("express");
const Todos = require("../database/models/Todos");
const Router = express.Router();

Router.get("/", async (req, res) => {
  const todos = await Todos.find();
  res.send(todos);
});

Router.post("/", async (req, res) => {
  const { title, description } = req.body;

  await Todos.create({
    title: title,
    description: description,
  });
  const todos = await Todos.find();
  res.send(todos);
});

Router.delete("/:id", async (req, res) => {
  await Todos.findByIdAndDelete(req.params.id);
  const todos = await Todos.find();
  res.send(todos);
});

Router.put("/:id", async (req, res) => {
  await Todos.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
  });
  const todos = await Todos.find();
  res.send(todos);
});
module.exports = Router;
