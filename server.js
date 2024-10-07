//import dependencies
const express = require("express");
const app = express();

const mysql = require("mysql2");
const dotenv = require("dotenv");

//configuration
app.use(express.json());
dotenv.config();

//connect our database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//to check if connection is successful
db.connect((err) => {
  if (err) {
    return console.log("Error connecting to database ", err);
  }
  return console.log("Connection is successful!");
});

//My code is in the README.md file
// Question 1 goes here
app.get("/questionOne", (req, res) => {
  const patientDetails =
    "SELECT patient_id, first_name, last_name, date_of_birth FROM patients";
  db.query(patientDetails, (err, data) => {
    // checking for error
    if (err) {
      return res.status(400).send("Failed to connect to database");
    }
    res.status(200).send(data);
  });
});

// Question 2 goes here
app.get("/questionTwo", (req, res) => {
  const providerDetails =
    "SELECT first_name, last_name, provider_specialty FROM providers";
  db.query(providerDetails, (err, data) => {
    if (err) {
      return res.status(400).send("Failed to retrieve details", err);
    }
    res.status(200).send(data);
  });
});

// Question 3 goes here
app.get("/questionThree", (req, res) => {
  const patientFirstName = "SELECT first_name FROM patients";
  db.query(patientFirstName, (err, data) => {
    if (err) {
      return res.status(400).send("Failed to retrieve patients first name");
    }
    res.status(200).send(data);
  });
});

// Question 4 goes here
app.get("/questionThree", (req, res) => {
  const providerSpecialty = "SELECT provider_specialty FROM providers";
  db.query(providerSpecialty, (err, data) => {
    if (err) {
      return res.status(400).send("Failed to retrieve provider specialty");
    }
    res.status(200).send(data);
  });
});

//my code is up there

//listen to server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`);
});
