const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/home', (req, res) => {
  res.json({ success: true, msg: "home" });
});

const server = app.listen(3000, () => {
    console.log('Server is listening at port: '+ 3000);
});

// for testing
module.exports = server;
