const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    default: Date.now,
    type: Date,
  }
});

module.exports = mongoose.model('Post', PostSchema);