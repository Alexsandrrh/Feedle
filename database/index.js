const mongoose = require("mongoose");
const { DATABASE } = require("../config");

mongoose.connect(DATABASE, { useNewUrlParser: true });

module.exports = mongoose;
