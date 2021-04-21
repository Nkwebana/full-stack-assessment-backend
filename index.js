require('dotenv/config');
const express = require('express');

const { router } = require('./src/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const PORT = 8080;

app.listen(PORT, () => {
  console.log('app listening on port ', PORT);
});
