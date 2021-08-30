import { combineReducers } from 'redux'
import ItemReducers from './itemReducer'

export default combineReducers({
  items: ItemReducers
})


