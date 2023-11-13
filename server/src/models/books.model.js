// const books = [
//   {
//     id: 1,
//     title: "To Kill A Mockingbird",
//     author: "Harper Lee",
//     publisher: "J. B. Lippincott & Co.",
//     publisherYear: "1960",
//     imageUrl:
//       "https://cdn.penguin.co.uk/dam-assets/books/9781784752637/9781784752637-jacket-large.jpg",
//     description:
//       "A novel before its time, Harper Lee’s Pulitzer-prize winner addresses issues of race, inequality and segregation with both levity and compassion. Told through the eyes of loveable rogues Scout and Jem, it also created one of literature’s most beloved heroes – Atticus Finch, a man determined to right the racial wrongs of the Deep South.",
//   },
// ];

const { Sequelize, DataTypes } = require("sequelize");

const db = require("../utils/db");

const Book = db.define(
  "book",
  {
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
  },
  {
    tableName: "books",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Book;

//module.exports = books;
