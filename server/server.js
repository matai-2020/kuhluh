const path = require('path')

const cors = require('cors')
const express = require('express')

const colors = require('./routes/colors')

const server = express()

// configuration
server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))

// routes
server.use(express.static(path.join(__dirname, 'static')))
server.use('/color', colors)

module.exports = server
