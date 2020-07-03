const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  saved: {
    type: Boolean,
    required: true
  },
  note: {
    type: Array
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;