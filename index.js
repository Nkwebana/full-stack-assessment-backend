const express = require('express');
const cors = require('cors');

const { router } = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const PORT = 8080;

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
