//import dependencies
const express = require('express');
const app = express();

const mysql = require('mysql2');
const dotenv = require('dotenv');

//configuration
app.use(express.json());
dotenv.config();

//connect our database
const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

//to check if connection is successful
db.connect((err) => {
    if(err){
        return console.log('Error connecting to database ', err);
    }
    return console.log('Connection is successful!')
})

//My code is in the README.md file



//my code is up there


//listen to server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})
