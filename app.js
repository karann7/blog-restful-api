"use strict";
// npm dependcies
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const path = require('path');
// local dependencies.
const mongoose = require('./db/mongoose');
const Blog = require('./db/models/blog');
const User = require('./db/models/user');
// immutabile variables
const app = express();
const port = process.env.port || 3000;

// this will parse the body of the incoming request
// as well as set absolute path for public
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join( __dirname, 'public' )));

// ******* ROUTES **********

// CREATE
app.post('/users', ( req, res )=>{
	let user = new User({
		username: req.body.username,
		password: req.body.password
	});
	user.save().then((user)=>{
		res.status(200).send(`User created: ${user.username}`);
	}).catch( e => res.status(400).send(e) );
});


app.post('/blogs', ( req, res )=>{
  // capturing the inputs
	let blog = new Blog({
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
app.get('/blogs/', ( req, res )=>{
	Blog.find({}).then((blogs)=>{
		res.send(blogs);
	}).catch( e => res.status(400).send(e) );
});

// READBYID
app.get('/blogs/:id', ( req, res )=>{
	let id = req.params.id;
	Blog.findById({_id: id}).then((blogs)=>{
		res.send(blogs);
	}).catch( e => res.status(400).send(e) );
});

//UPDATE

//DELETE

app.listen(port, ()=> console.log(`Server is up on ${port}`));