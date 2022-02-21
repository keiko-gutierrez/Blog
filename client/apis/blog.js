import request from 'superagent'

const rootUrl = '/api/v1'

export function getBlog () {
  return request.get(rootUrl + '/blog')
    .then(res => {
      return res.body.blog
    })
}
