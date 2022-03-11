const connection = require('./connection')

function getBlog (db = connection) {
  return db('blog').select()
}

function getTechBlog (db = connection) {
  return db('blog').select()
    .where('id', 3)
}

function addPost (blog, db = connection) {
  return db('blog')
    .insert({ name: blog })
    .then(() => getBlog(db))
}

module.exports = {
  getBlog,
  getTechBlog,
  addPost
}
