require("babel-polyfill");
const url = `${ROOT_URL}?s=${searchTerm}${API_KEY}`;
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');


const app = express();

const public = path.join(__dirname, '..', 'public');
const dist = path.join(__dirname, '..', 'dist');

app.use(morgan('dev'));
app.use(express.static(dist));
app.use(express.static(public));

app.get('*', (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
});

app.get(url, (req,res) => {
   axios.get(url)
    .then(response => {
      console.log('response:' , response.data);
      res.send(response.data);
    })
    .catch(err => res.send('HTTPS middleware error:',err.message));
});

module.exports = app;
