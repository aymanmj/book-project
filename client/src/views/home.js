const API_URL = "http://localhost:8000";

const {
  getAllBooks,
} = require("../../../server/src/routes/books/book.controller");

// Load all books and return them as json
async function httpGetBooks() {
  const response = await fetch(`${API_URL}/books`, getAllBooks);
  return await response.json();
}
