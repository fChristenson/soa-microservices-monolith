const express = require("express");

const app = express();

const users = [{ id: "1", name: "foobar" }];

app.use(express.json());

app.get("/api/v1/users/:id", (req, res) => {
  res.json(users.find(u => u.id === req.params.id));
});

module.exports = app;
