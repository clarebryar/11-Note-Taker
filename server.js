// 
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog')


const PORT =  3001 || process.env.port;
const app = express();

const api = require('./routes/index.js');


app.use(clog);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile('/public/index.html')
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT} 🚀`))