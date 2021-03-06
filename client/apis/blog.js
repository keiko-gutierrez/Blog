import request from 'superagent'

const rootUrl = '/api/v1'

export function getTechBlog () {
  return request.get(rootUrl + '/blog/techblog')
    .then(res => {
      return res.body.blog
    })
}

export function postTechBlog (newPost) {
  return request.post(rootUrl + '/blog/techblog')
    .send({
      techPost: newPost
    })
    .then(res => {
      return res.body.blog
    })
}
