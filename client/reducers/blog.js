import { SET_BLOG, SET_POSTS_SUCCESS } from '../actions'

const initialState = [{ content: '' }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOG:
    case SET_POSTS_SUCCESS:
      return action.blog
    default:
      return state
  }
}

export default reducer
