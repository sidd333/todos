const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { conn } = require("./src/database/db");
const todos = require("./src/routes/todos");
dotenv.config();
conn();

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;

app.get("/", (req, res) => {
  console.log("hw");
});

app.use("/todos", todos);
app.listen(port, () => {
  console.log("listening on ", port);
});
