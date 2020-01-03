const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/api/v1/orders", async (req, res) => {
  const { userId, bookId } = req.body;

  const book = await axios.get(`http://localhost:3001/api/v1/books/${bookId}`);
  const user = await axios.get(`http://localhost:3002/api/v1/users/${userId}`);

  const order = {
    user: user.data,
    books: [book.data]
  };

  res.json(order);
});

module.exports = app;
