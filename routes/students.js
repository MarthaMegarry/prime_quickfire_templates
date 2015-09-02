var express = require('express');
var router = express.Router();
var students = require('../models/students.json');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(students);
});

module.exports = router;
