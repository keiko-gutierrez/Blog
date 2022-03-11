const connection = require('./connection')

function getBlog (db = connection) {
  return db('blog').select()
}

function getTechBlog (db = connection) {
  return db('blog').select()
    .where('id', 3)
}
function addTechPost (blog, db = connection) {
  return db('blog')
    .update({ content: blog })
    .where('id', 3)
    .then(() => getTechBlog(db))
}

function addPost (blog, db = connection) {
  return db('blog')
    .insert({ name: blog })
    .then(() => getBlog(db))
}

module.exports = {
  getBlog,
  getTechBlog,
  addTechPost,
  addPost
}
