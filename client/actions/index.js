import { getBlog } from '../apis/blog'

export const SET_BLOG = 'SET_BLOG'

export function setBlog (blog) {
  return {
    type: SET_BLOG,
    blog
  }
}

export function fetchBlog () {
  return dispatch => {
    return getBlog()
      .then(blog => {
        dispatch(setBlog(blog))
        return null
      })
  }
}
