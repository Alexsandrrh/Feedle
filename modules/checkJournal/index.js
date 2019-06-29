const Journal = require('../../database/models/Journal');
const FeedHistory = require('../../database/models/FeedHistory');
const log = require('console-emoji');
const feedParser = require('../feedParser');

const checker = async () => {
  let journals = await Journal.find({});
  let history = { updatedJournals: [] };

  for (let i = 0; i < journals.length; i++) {
    const journal = journals[i];

    for (let j = 0; j < journal.feeds.length; j++) {
      const feed = journal.feeds[j];

      let result = Number(Date.now()) - Number(Date.parse(feed.updatedAt));
      let times =
        Number(Date.parse(feed.updatedAt)) - Number(Date.parse(feed.createdAt));

      if (result >= 600000 || times === 0) {
        feedParser(journal._id, feed.url);

        Journal.findByIdAndUpdate(
          journal._id,
          {
            $set: { 'feeds.$[index].updatedAt': Date.now() }
          },
          {
            arrayFilters: [{ index: j }],
            multi: true
          },
          (err, data) => {
            if (err) return err;

            console.log(data.feeds[j]);
          }
        );

        // create history
        history.updatedJournals.push({
          name: journal.name,
          id: journal._id,
          feed: {
            name: feed.name,
            url: feed.url
          }
        });
      } else {
        log(`:rainbow:  |  Not reload journal : ${journal.name}`, 'yellow');
      }
    }
  }

  new FeedHistory(history).save(err => {
    if (err) return err;
  });

  setTimeout(() => {
    log(`:elephant:  | Restart loading`, 'blue');
    checker();
  }, 4800000);
};

checker();
