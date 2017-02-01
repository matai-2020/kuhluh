var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getColor((err, color) => {
    // Warning: this error handling is rubbish
    if (!err) res.json(color)
  })
})

router.get('/all', function (req, res) {
  const allColors = db.getColors()
  res.json(allColors)
})

router.post('/', function (req, res) {
  const color = req.body.color
  db.addColor(color, (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.sendStatus(201)
    }
  })
})

module.exports = router
