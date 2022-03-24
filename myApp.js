const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

// console.log('Hello World');

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.post('/name', (req, res) => {
    //
    let { first: firstName, last: lastName } = req.body;
    res.json({ name: `${firstName} ${lastName}` });
});

app.use((req, res, next) => {
    const finalMsg = `${req.method} ${req.path} - ${req.ip}`;
    console.log(finalMsg);
    next();
});

app.get('/name', (req, res) => {
    //
    let { first: firstName, last: lastName } = req.query;

    res.json({ name: `${firstName} ${lastName}` });
});

app.get(
    '/now',
    (req, res, next) => {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.send({ time: req.time });
    }
);

app.get('/:word/echo', (req, res) => {
    let word = req.params.word;
    res.send({ echo: word });
});

absolutePath = `${__dirname}/views/index.html`;

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

abolPath2 = `${__dirname}/public`;
app.use('/public', express.static(abolPath2));

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({ message: 'HELLO JSON' });
    } else {
        res.json({ message: 'Hello json' });
    }
});

module.exports = app;
