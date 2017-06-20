const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: {
    type: String,
     required: true,
     minlength: 6
    },
  blogpost: {
    type: String,
    required: true,
    minlength: 6
  },
  author: {
    type: String,
    require: true,
    default: 'Karann'
  },
  createdAt: {
		type: Date,
		default: Date.now
	}, 
});

const Blog = mongoose.model('Blog', Schema);

module.exports = Blog;