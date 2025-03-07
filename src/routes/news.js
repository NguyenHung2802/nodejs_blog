const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/newsController');

// newsController.index

route.use('/', newsController.index);

module.exports = router;