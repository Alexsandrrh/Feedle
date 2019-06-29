const Article = require('../database/models/Article');

const getAllArticles = (req, res) => {
  Article.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
};

const postNewArticle = (req, res) => {
  new Article(req.body).save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

module.exports = {
  getAllArticles,
  postNewArticle
};
