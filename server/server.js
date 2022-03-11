const express = require('express')
const req = require('express/lib/request')
const path = require('path')

const blogRoutes = require('./routes/blog')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/blog', blogRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
