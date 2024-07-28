const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {});

module.exports = app;
