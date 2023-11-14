const express = require("express");
const axios = require("axios");

const booksRouter = express.Router();

booksRouter.get("/", async (req, res) => {
  const response = await axios
    .get("http://localhost:8000/books")
    .then((response) => {
      const books = response.data;
      res.render("index", { books, pageTitle: "Home Page", path: "/" });
    });
  //   const response = await fetch("http://localhost:8000/books");
  //const books = await response.json();
});

booksRouter.get("/books/add-book", async (req, res) => {
  res.render("edit-book", {
    pageTitle: "Add Book",
    path: "/books/add-book",
    editing: false,
  });
});

booksRouter.post("/books/add-book", async (req, res) => {
  // Use the axios.post() method to send data to the server
  axios
    .post(
      "http://localhost:8000/books/add-book",
      {
        book: {
          title: req.body.title,
          author: req.body.author,
          publisher: req.body.publisher,
          publishYear: req.body.publishYear,
          imageUrl: req.body.imageUrl,
          description: req.body.description,
          bookState: true,
        },
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    // Handle the response from the server
    .then((response) => {
      console.log("Response data:", response.data);
      res.redirect("/");
    })
    // Handle the error from the server
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

module.exports = booksRouter;
