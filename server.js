// 
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog')
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;
const app = express();

const api = require('./routes/index.js');


// middleware
app.use(clog);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get