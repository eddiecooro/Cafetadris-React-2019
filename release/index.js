const express = require('express');
const path = require('path');
const app = express();

app.use('/react', express.static(path.join(__dirname, 'build')));

app.get('/react/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/users', function(req, res) {
  res.send({
    users: [1, 2, 3, 4]
  });
});

app.listen(5000);
