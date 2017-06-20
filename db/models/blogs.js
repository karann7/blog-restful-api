const mongoose = require('mongoose');

const blogschema = new mongoose.Schema({
  title: {
    type: String,
     required: true
    },
  blogpost: {
    type: String,
    required: true
  },
  author: {
    type: String,
    require: true,
    default: 'Karann'
  },
  createdAt: {
		type: Number,
		default: null
	}, 
});

const Blog = mongoose.model('Blog', blogschema);

module.exports = Blog;