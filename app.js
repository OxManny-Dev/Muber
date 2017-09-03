const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send({ hello: 'there'});
});

module.exports = app;
