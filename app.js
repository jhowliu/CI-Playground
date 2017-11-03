const express = require('express');

const app = express();

app.get('*', async (req, res) => {
    res.json({ success: true, msg: 'Hello world'});
});

app.listen(3000, async () => {
    console.log('Server is listening at port: '+ 3000);
});
