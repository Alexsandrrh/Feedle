const Journal = require('../database/models/Journal');

const getAllJournals = (req, res) => {
  Journal.find({})
    .populate('articlesList')
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
};

const postNewJournal = (req, res) => {
  new Journal(req.body).save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

module.exports = {
  getAllJournals,
  postNewJournal
};
