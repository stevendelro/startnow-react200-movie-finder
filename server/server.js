require("babel-polyfill");
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

const public = path.join(__dirname, '..', 'public');
const dist = path.join(__dirname, '..', 'dist');

app.use(morgan('dev'));
app.use(express.static(dist));
app.use(express.static(public));

app.get('*', (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
});

module.exports = app;
