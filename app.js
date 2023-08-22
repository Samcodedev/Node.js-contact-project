// externa import
const express = require('express');
const dotenv = require('dotenv').config();

// internal import
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb()
const app = express()
const port = process.env.PORT;  // getting the port from the .env file

app.use(express.json())  // to send responce in json format

// Different Routes
app.use('/api/contacts', require('./routes/contactRoutes'))  // contact route endpoint, imported all the route actions
app.use('/api/users', require('./routes/usersRoutes'))  // user route endpoint, imported all the route actions
app.use(errorHandler)

// Specifying the port to be used
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})



// stop 0:54:06 -- 0:48:46