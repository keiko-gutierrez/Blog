const express = require('express')

const db = require('../db/blog')

const router = express.Router()

router.get('/techblog', async (req, res) => {
  try {
    const blog = await db.getTechBlog()
    res.json({ blog })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/techblog', async (req, res) => {
  const post = req.body.techPost
  try {
    const blog = await db.addTechPost(post)
    res.json({ blog })
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  const post = req.body.newPost
  try {
    const blog = await db.addPost(post)
    res.json({ blog })
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

module.exports = router
