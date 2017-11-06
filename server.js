const express = require('express');
const getTime = require('./libs/getTime');

const app = express();

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  global.siteUrl = req.headers.host;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:input', (req, res) => {
  const { input } = req.params;
  res.json(getTime(input));
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3000');
});
