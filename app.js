"use strict";
// npm dependcies
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const path = require('path');
// local dependencies.
  const mongoose = require('./db/mongoose');
  const Blog = require('./db/models/blogs');

// immutabile variables
const app = express();
const port = process.env.port || 3000;

// this will parse the body of the incoming request
// as well as set absolute path for public
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// connecting mongoose

// routes
// CREATE
app.post('/blogs', (req, res)=>{
  // capturing the inputs
	var blog = new Blog({
		title: req.body.title,
		blogpost: req.body.blogpost
	});
	//save to the DB
	blog.save().then((blog)=>{
		res.status(200).send(blog);
	}).catch((e)=>{
		res.status(400).send(e);
	});
});

//READ
//UPDATE
//DELETE

app.listen(port, ()=> console.log(`Server is up on ${port}`));