"use strict";
//npm dependcies
const express = 'express';
const mongoose = 'mongoose';
const bodyParser = 'body-parser';
const {ObjectID} = 'mongodb';

// immutabile variables
const app = express();
const port = process.env.port || 3000;

// this will parse the body of the incoming request
app.use(bodyParser.json());

// connecting mongoose
mongoose.connect('mongodb://localhost:27017');
// serving the public directory.
app.set(express.static(__dirname + 'public'));




app.listen(port, ()=> console.log(`Server is up on ${port}`));