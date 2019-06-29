const express = require("express");
const Router = express.Router();
const { getAllJournals, postNewJournal } = require("../controllers/journals");

Router.get("/journals/all", getAllJournals);

Router.post("/journals", postNewJournal);

module.exports = Router;
