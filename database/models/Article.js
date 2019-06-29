const mongoose = require('../index');

const Schema = mongoose.Schema;
const Types = mongoose.Types;

const Article = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    default: null
  },
  contentSnippet: {
    type: String,
    default: null
  },
  journal: {
    type: Types.ObjectId,
    ref: 'Journal'
  },
  author: {
    type: String
  },
  publishedAt: {
    type: Date,
    default: Date.now()
  },
  image: {
    url: {
      type: String,
      default: null
    },
    type: { type: String, default: null }
  }
});

module.exports = mongoose.model('Article', Article);
