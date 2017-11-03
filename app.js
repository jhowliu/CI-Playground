const express = require('express');

const app = express();

const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/home', (req, res) => {
  res.json({ success: true, msg: "home" });
});

const server = app.listen(port, () => {
    console.log('Server is listening at port: '+ port);
});

// for testing
module.exports = server;
