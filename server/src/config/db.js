const mysql = require("mysql2");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config")[env];
const db = {};
const DATABASE_NAME = "booksDb";

// Function to create the database if it doesn't exist
async function createDatabaseIfNotExists() {
  const mysqlconnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
  });

  try {
    mysqlconnect.connect();
    mysqlconnect.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`);
    console.log("Database created or already exists.");
  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    mysqlconnect.end();
  }
}

// Calling Create database function
createDatabaseIfNotExists();

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

module.exports = sequelize;
