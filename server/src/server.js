const express = require("express");
const cors = require("cors");
const booksRouter = require("./routes/books/books.router");

const app = express();

const { port } = require("./config/config");

const myport = port || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(booksRouter);

app.listen(process.env.PORT || myport, () => {
  console.log(`listening on port ${myport}`);
});
