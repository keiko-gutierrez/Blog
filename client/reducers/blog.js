import { SET_BLOG } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOG:
      return action.fruits
    default:
      return state
  }
}

export default reducer
