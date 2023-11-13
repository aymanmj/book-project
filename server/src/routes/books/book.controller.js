const Book = require("../../models/books.model");

function getAllBooks(req, res, next) {
  Book.findAll({
    where: {
      bookState: true,
    },
  })
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      console.log(err);
    });
  //return res.status(200).json(books);
}

function postAddBook(req, res, next) {
  const book = req.body;

  // Send a response with the data
  Book.create({
    title: book.title,
    author: book.author,
    publisher: book.publisher,
    publishYear: book.publishYear,
    imageUrl: book.imageUrl,
    description: book.description,
    bookState: true,
  })
    .then((result) => {
      // console.log(result);
      console.log("Book Added!");
      res.status(201).json(book);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  getAllBooks,
  // getAddBook,
  postAddBook,
};

// const models = require("../models");

// exports.getIndex = (req, res, next) => {
//   models.Book.findAll({
//     where: {
//       bookState: true,
//     },
//   })
//     .then((allbooks) => {
//       res.render("index", {
//         books: allbooks,
//         pageTitle: "Home Page",
//         path: "/",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.getAddBook = (req, res, next) => {
//   res.render("edit-book", {
//     pageTitle: "Add Book",
//     path: "/books/add-book",
//     editing: false,
//   });
// };

// exports.postAddBook = (req, res, next) => {
//   const title = req.body.title;
//   const author = req.body.author;
//   const publisher = req.body.publisher;
//   const publishYear = req.body.publishYear;
//   const imageUrl = req.body.imageUrl;
//   const description = req.body.description;
//   models.Book.create({
//     title: title,
//     author: author,
//     publisher: publisher,
//     publishYear: publishYear,
//     imageUrl: imageUrl,
//     description: description,
//     bookState: true,
//   })
//     .then((result) => {
//       // console.log(result);
//       console.log("Book Added!");
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.getBook = (req, res, next) => {
//   const bookid = req.params.id;
//   models.Book.findByPk(bookid)
//     .then((mybook) => {
//       res.render("book-detail", {
//         book: mybook,
//         pageTitle: mybook.title,
//         path: "/books",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.getEditBook = (req, res, next) => {
//   const editMode = req.query.edit;
//   console.log(editMode);
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const bkId = req.params.bookId;
//   models.Book.findByPk(bkId)
//     .then((book) => {
//       if (!book) {
//         return res.redirect("/");
//       }
//       res.render("edit-book", {
//         pageTitle: "Edit Book",
//         path: "/books/edit-book",
//         editing: editMode,
//         book: book,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postEditBook = (req, res, next) => {
//   const bkId = req.body.bookId;
//   const updatedTitle = req.body.title;
//   const updatedAuthor = req.body.author;
//   const updatedPublisher = req.body.publisher;
//   const updatedPublishYear = req.body.publishYear;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;

//   //const updatedflag = true;
//   models.Book.findByPk(bkId)
//     .then((book) => {
//       book.title = updatedTitle;
//       book.author = updatedAuthor;
//       book.publisher = updatedPublisher;
//       book.publishYear = updatedPublishYear;
//       book.imageUrl = updatedImageUrl;
//       book.description = updatedDesc;
//       book.bookState = true;
//       return book.save();
//     })
//     .then((result) => {
//       console.log("BOOK UPDATED!");
//       res.redirect("/books");
//     })
//     .catch((err) => console.log(err));
// };

// exports.getAllBooks = (req, res, next) => {
//   models.Book.findAll()
//     .then((books) => {
//       res.render("./books", {
//         allbooks: books,
//         pageTitle: "All Books",
//         path: "/books",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.getBooks = (req, res, next) => {
//   models.Book.findAll({
//     where: {
//       bookState: true,
//     },
//   })
//     .then((allbooks) => {
//       res.render("books", {
//         books: allbooks,
//         pageTitle: "All Books",
//         path: "/books",
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postDeleteBook = (req, res, next) => {
//   const bkId = req.body.bookId;
//   const updatedFlag = false;
//   models.Book.findByPk(bkId)
//     .then((book) => {
//       book.bookState = updatedFlag;
//       return book.save();
//     })
//     .then((result) => {
//       console.log("BOOK ARCHIVED!");
//       res.redirect("/books");
//     })
//     .catch((err) => console.log(err));
// };
