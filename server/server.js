require("babel-polyfill");
const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');


const app = express();
app.use(sslRedirect())
const public = path.join(__dirname, '..', 'public');
const dist = path.join(__dirname, '..', 'dist');

app.use(morgan('dev'));
app.use(express.static(dist));
app.use(express.static(public));

app.get('*', (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
});



module.exports = app;
