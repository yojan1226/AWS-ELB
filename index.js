const express = require('express');
const ip = require('ip');

const app = express();

app.get('/ping' , (req, res) => {
    return res.json({
        message: 'pong'
    })
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
})