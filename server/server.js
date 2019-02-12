var path = require('path')
var express = require('express')

var colors = require('./routes/colors')

var port = process.env.PORT || 3000
var app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))

app.use('/color', colors)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
