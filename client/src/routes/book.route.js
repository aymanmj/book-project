const express = require("express");
const axios = require("axios");

const booksRouter = express.Router();

booksRouter.get("/", async (req, res) => {
  const response = await axios.get("http://localhost:8000").then((response) => {
    const books = response.data;
    res.render("index", { books, pageTitle: "Home Page", path: "/" });
  });
  //   const response = await fetch("http://localhost:8000/books");
  //const books = await response.json();
});

booksRouter.get("/books", async (req, res) => {
  const response = await axios
    .get("http://localhost:8000/books")
    .then((response) => {
      const books = response.data;
      res.render("./books", { books, pageTitle: "All Books", path: "/books" });
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

booksRouter.get("/books/edit-book/:bookId", async (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }

  try {
    const response = await axios
      .get("http://localhost:8000/books/edit-book/:bookId", {
        params: { bookId: req.params.bookId, edit: true },
      })
      .then((response) => {
        const book = response.data;

        //console.log(response.data);
        res.render("./edit-book", {
          editing: editMode,
          book: book,
          pageTitle: "Edit Page",
          path: "/books/edit-book",
        });
      });
  } catch (error) {
    console.log(error);
  }
});

booksRouter.post("/books/edit-book", async (req, res) => {
  axios
    .post(
      "http://localhost:8000/books/edit-book",
      {
        book: {
          id: req.body.bookId,
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
    ) // Handle the response from the server
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

// await axios({
//   method: "get",
//   url: "http://localhost:8000/books/edit-book/:bookId",
//   params: {
//     bookId: req.params.bookId,
//     edit: true,
//   },
// })
//   .then((response) => {
//     const book = response.data;
//     console.log(book);
//     res.render("./edit-book", {
//       editing: editMode,
//       book: book,
//       pageTitle: "Edit Page",
//       path: "/books/edit-book",
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });
