var express = require('express');
var router = express.Router();
const dataController = require('../controller/data')

/* GET home page. */
router.get('/', dataController.getTemplate);

module.exports = router;
