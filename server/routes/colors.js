const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getColor((err, color) => {
    // TODO: this error handling is rubbish
    if (!err) res.json(color)
  })
})

router.get('/all', (req, res) => {
  const allColors = db.getColors()
  res.json(allColors)
})

router.post('/', (req, res) => {
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
