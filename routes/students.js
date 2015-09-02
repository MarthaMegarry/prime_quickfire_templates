var express = require('express');
var router = express.Router();
var students = require('../models/students.json');
var path = require('path');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(students);
});

router.post('/', function(req, res, next){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var file = path.join(__dirname, "../models/students.json");

    fs.readFile(file, "UTF-8", function(err, data){
        if(err){
            console.log(err);
        } else {
            var studentArray = JSON.parse(data);
        }
        studentArray.push({"firstName": firstName, "lastName": lastName});



        fs.writeFile(file, JSON.stringify(studentArray), 'utf-8', function (err) {
            if (err) {
                console.log(err);
            } else {
                res.sendStatus(200);
                console.log('data written to file');
            }
        });
        res.send(studentArray);
    });

});



module.exports = router;
