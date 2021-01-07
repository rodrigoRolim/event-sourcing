const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true
  } 
})

const Post = mongoose.model('Post', schema);

module.exports = Post;
