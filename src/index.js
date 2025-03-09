const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;
const path = require('path');
const route = require('./routes');

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

// Home, search, contact

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})