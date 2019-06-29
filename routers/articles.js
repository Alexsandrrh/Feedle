const express = require('express');
const Router = express.Router();
const { getAllArticles, postNewArticle } = require('../controllers/articles');

Router.get('/articles/all', getAllArticles);

Router.post('/articles', postNewArticle);

module.exports = Router;
