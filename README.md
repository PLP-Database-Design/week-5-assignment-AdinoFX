# Database Interacation in Web Applications

This demonstrates the cconnection of MySQL database and Node.js to create a simple API

## Requirements
- [Node.js](https://nodejs.org/) installed
-  MySQL installed and running
-  A code editor, like [Visual Studio Code](https://code.visualstudio.com/download)

## Setup
1. Clone the repository
2. Initialize the node.js environment
   ```
   npm init -y
   ```
3. Install the necessary dependancies
   ```
   npm install express mysql2 dotenv nodemon
   ```
4. Create a ``` server.js ``` and ```.env``` files
5. Basic ```server.js``` setup
   <br>
   
   ```js
   const express = require('express')
   const app = express()

   
   // Question 1 goes here
     app.get('/questionOne', (req, res) => {
    const patientDetails = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
    db.query(patientDetails, (err, data) => {
        // checking for error
        if(err){
            return res.status(400).send('Failed to connect to database');
        }
        res.status(200).send(data);
    }); 
    });



   // Question 2 goes here
   app.get('/questionTwo', (req, res) => {
    const providerDetails = 'SELECT first_name, last_name, provider_specialty FROM providers';
    db.query(providerDetails, (err, data) => {
        if(err){
            return res.status(400).send('Failed to retrieve details', err);
        }
        res.status(200).send(data);
    });
    });

   // Question 3 goes here
   app.get('/questionThree', (req, res) => {
    const patientFirstName = 'SELECT first_name FROM patients';
    db.query(patientFirstName, (err, data) => {
        if(err){
            return res.status(400).send('Failed to retrieve patients first name');
        }
        res.status(200).send(data);
    });
    });

   // Question 4 goes here
   app.get('/questionThree', (req, res) => {
    const providerSpecialty = 'SELECT provider_specialty FROM providers';
    db.query(providerSpecialty, (err, data) => {
        if(err){
            return res.status(400).send('Failed to retrieve provider specialty');
        }
        res.status(200).send(data);
    });
    });
   

   // listen to the server
   const PORT = 3000
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })
   ```
<br><br>

## Run the server
   ```
   nodemon server.js
   ```
<br><br>

## Setup the ```.env``` file
```.env
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db
```

<br><br>

## Configure the database connection and test the connection
Configure the ```server.js``` file to access the credentials in the ```.env``` to use them in the database connection

<br>

## 1. Retrieve all patients
Create a ```GET``` endpoint that retrieves all patients and displays their:
- ```patient_id```
- ```first_name```
- ```last_name```
- ```date_of_birth```

<br>

## 2. Retrieve all providers
Create a ```GET``` endpoint that displays all providers with their:
- ```first_name```
- ```last_name```
- ```provider_specialty```

<br>

## 3. Filter patients by First Name
Create a ```GET``` endpoint that retrieves all patients by their first name

<br>

## 4. Retrieve all providers by their specialty
Create a ```GET``` endpoint that retrieves all providers by their specialty

<br>


## NOTE: Do not fork this repository
