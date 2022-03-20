var express = require('express');
var app = express();
require('dotenv').config();

// console.log('Hello World');

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

app.use((req, res, next) => {
    let finalMsg = `${req.method} ${req.path} - ${req.ip}`;
    console.log(finalMsg);
    next();
});

absolutePath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

abolPath2 = __dirname + '/public';
app.use('/public', express.static(abolPath2));

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({ message: 'HELLO JSON' });
    } else {
        res.json({ message: 'Hello json' });
    }
});

module.exports = app;
