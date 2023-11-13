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

// // Use the axios.post() method to send data to the server
// axios
//   .post(
//     "http://localhost:8000/books/add-book",
//     {
//       title: req.body.title,
//       author: req.body.author,
//       publisher: req.body.publisher,
//       publisherYear: req.body.publisherYear,
//       imageUrl: req.body.imageUrl,
//       description: req.body.description,
//       bookState: true,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   )
//   // Handle the response from the server
//   .then((response) => {
//     console.log("Response data:", response.data);
//   })
//   // Handle the error from the server
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

module.exports = booksRouter;
