const mongoose = require('../index');

const Schema = mongoose.Schema;
const Types = mongoose.Types;

const Journal = new Schema(
  {
    name: String,
    id: Types.ObjectId,
    feed: {
      name: String,
      url: String
    }
  },
  { _id: false, autoIndex: false }
);

const FeedHistory = new Schema({
  updatedJournals: [Journal],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('feed-history', FeedHistory);
