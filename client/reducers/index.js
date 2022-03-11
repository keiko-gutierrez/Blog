import { combineReducers } from 'redux'

import blog from './blog'
import loading from './loading'
import errMessage from './errMessage'

export default combineReducers({
  blog,
  loading,
  errMessage
})
