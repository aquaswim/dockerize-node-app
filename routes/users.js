var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    envValue: process.env.MY_ENV || "unset",
    edit: "Edited"
  });
});

module.exports = router;
