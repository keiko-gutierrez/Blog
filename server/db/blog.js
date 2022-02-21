const connection = require('./connection')

function getBlog (db = connection) {
  return db('blog').select()
}

module.exports = {
  getBlog
}
