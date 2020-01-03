const express = require("express");

const app = express();

const books = [{ id: "1", name: "Amazing book" }];

const users = [{ id: "1", name: "foobar" }];

app.use(express.json());

app.get("/api/v1/users/:id", (req, res) => {
  res.json(users.find(u => u.id === req.params.id));
});

app.get("/api/v1/books", (req, res) => {
  res.json(books);
});

app.get("/api/v1/books/:id", (req, res) => {
  res.json(books.find(b => b.id === req.params.id));
});

module.exports = app;
