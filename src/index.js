const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'publish')));

app.use(express.urlencoded(
  {extended: true}
))
app.use(express.json())

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', handlebars({extname: '.hbs'}));
// Views and view engine
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})