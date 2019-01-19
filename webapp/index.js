const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.sendfile('./index.html');
  });
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
