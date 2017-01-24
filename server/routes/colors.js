var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getColor((err, color) => {
    // Warning: this error handling is rubbish
    if (!err) res.json(color)
  })
})

module.exports = router
