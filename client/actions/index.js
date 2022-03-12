import { getTechBlog, postTechBlog } from '../apis/blog'

export const SET_BLOG = 'SET_BLOG'
export const SET_POSTS_PENDING = 'SET_POSTS_PENDING'
export const SET_POSTS_SUCCESS = 'SET_POSTS_SUCCESS'
export const SET_ERROR = 'SET_ERROR'
export const SET_POST = 'SET_POST'

export function setBlog (blog) {
  return {
    type: SET_BLOG,
    blog
  }
}

export function fetchTechBlog () {
  return dispatch => {
    return getTechBlog()
      .then(blog => {
        dispatch(setBlog(blog))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function addTechPost (newPost) {
  return dispatch => {
    return postTechBlog(newPost)
      .then(posts => {
        dispatch(setPostsSuccess(posts))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function setPostsPending () {
  return {
    type: SET_POSTS_PENDING
  }
}

export function setPostsSuccess (posts) {
  console.log(posts)
  return {
    type: SET_POSTS_SUCCESS,
    blog: posts
  }
}

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}

export function setNewPost (errMessage) {
  return {
    type: SET_POST,
    errMessage
  }
}
