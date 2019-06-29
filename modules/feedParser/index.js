const Parser = require('rss-parser');
const parser = new Parser();
const log = require('console-emoji');
const _get = require('lodash/get');
const Article = require('../../database/models/Article');
const Journal = require('../../database/models/Journal');

const dataFeedRequest = async (id, url) => {
  const feed = await parser.parseURL(url);

  // View some info
  log(`Source journal get success : ${feed.title}`, 'ok');

  for (let i = 0; i < feed.items.length; i++) {
    const {
      title,
      link,
      isoDate,
      creator,
      contentSnippet,
      enclosure,
      content
    } = feed.items[i];
    let form = {};

    form.title = title;
    form.link = String(link);
    form.publishedAt = isoDate;
    form.content = content;
    form.contentSnippet = contentSnippet;
    form.image = {
      url: _get(enclosure, 'url', ''),
      type: _get(enclosure, 'type', '')
    };
    form.journal = id;
    form.author = creator;

    // Save new article
    let article = new Article(form);
    article.save(err => {
      if (err) {
        return err;
      }
    });
  }
};

module.exports = dataFeedRequest;
