require('babel-polyfill');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
const app = express();

const public = path.join(__dirname, '..', 'public');
const dist = path.join(__dirname, '..', 'dist');

app.get('*', (req, res, next) => {
  if (req.headers["x-forwarded-proto"] === "https") {
    next();
  };
  res.redirect('https://'+req.hostname+req.url);
});

const sendIndex = (req, res, next) => {
  res.sendFile(path.join(public, 'index.html'));
}

app.use(morgan('dev'));
app.use(express.static(dist));
app.use(express.static(public));


app.all('*', sendIndex)



module.exports = app;
