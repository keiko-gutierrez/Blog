exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blog').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog').insert([
        { id: 1, name: 'IdentityValues' },
        { id: 2, name: 'Reflections' },
        { id: 3, name: 'TechBlog' }
      ])
    })
}
