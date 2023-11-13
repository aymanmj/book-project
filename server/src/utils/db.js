const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("booksDb", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;

// async function testConnection() {
//   try {
//     await db.authenticate();
//     console.log("Connection has been established successfully.👍");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// testConnection();

// module.exports = db;
