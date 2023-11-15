const { Sequelize, DataTypes } = require("sequelize");

const db = require("../config/db");

const Book = db.define("book", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishYear: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  bookState: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

Book.sync().then(() => {
  console.log("Book table sync successful");
});

module.exports = Book;

//module.exports = books;
