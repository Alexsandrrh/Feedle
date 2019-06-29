const express = require('express');
const app = express();
const { PORT } = require('./config');
const bodyParser = require('body-parser');

// Settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '100kb' }));

// FeedParser
require('./modules/checkJournal');

app.use('/api/v1', require('./routers/journals'));
app.use('/api/v1', require('./routers/articles'));

app.listen(PORT, () => {
  console.log(`Server started on URL : http://localhost:${PORT}`);
});
