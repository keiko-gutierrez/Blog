const express = require('express')

const db = require('../db/blog')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBlog()
    .then(results => {
      res.json({ blog: results.map(blog => blog.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
