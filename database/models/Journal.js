const mongoose = require('../index');

const Schema = mongoose.Schema;
const Types = mongoose.Types;

const Feed = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

const Social = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true,
      unique: true
    }
  },
  { _id: false, autoIndex: false }
);

const Journal = new Schema({
  name: {
    type: String,
    required: true
  },
  siteUrl: {
    type: String,
    required: true,
    unique: true
  },
  logoImage: {
    type: String,
    unique: true,
    default: null
  },
  followersCount: {
    type: Number,
    default: 0
  },
  backgroundImage: {
    type: String,
    unique: true,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  socialNetworks: [Social],
  articlesList: [],
  feeds: [Feed],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Journal', Journal);
