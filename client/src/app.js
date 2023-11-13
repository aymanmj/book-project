const express = require("express");
const booksRouter = require("./routes/book.route");
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, "views")));
app.use(booksRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
