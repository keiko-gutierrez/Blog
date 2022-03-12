import {
  SET_POSTS_PENDING,
  SET_POSTS_SUCCESS,
  SET_ERROR
} from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS_PENDING:
      return true

    case SET_POSTS_SUCCESS:
    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default reducer
