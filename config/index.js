const { argv } = require('yargs');

let config = {
  PORT: 3000,
  DATABASE: 'mongodb://localhost:27017/feedle',
  BOT_TOKEN: '700375829:AAFzizddaZcZ5PSX5ga2cgVldSVoqQDHil8'
};

if (argv.production) {
  config.PORT = 80;
  config.DATABASE = '';
}

module.exports = config;
