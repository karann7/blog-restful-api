const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
});

const User = mongoose.model( 'User', Schema );
module.exports = User ;