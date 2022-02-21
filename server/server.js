const express = require('express')
const path = require('path')

const blogRoutes = require('./routes/blog')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/blog', blogRoutes)

module.exports = server
