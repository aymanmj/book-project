const express = require("express");

const bookController = require("./book.controller");

const booksRouter = express.Router();
//booksRouter.get("/", bookController.getIndex);
booksRouter.get("/books", bookController.getAllBooks);
// booksRouter.get("/books/add-book", bookController.getAddBook);
booksRouter.post("/books/add-book", bookController.postAddBook);
// booksRouter.get("/books/:id", bookController.getBook);
// booksRouter.get("/books/edit-book/:bookId", bookController.getEditBook);
// booksRouter.post("/books/edit-book", bookController.postEditBook);
// booksRouter.post("/books/delete-book", bookController.postDeleteBook);

module.exports = booksRouter;
