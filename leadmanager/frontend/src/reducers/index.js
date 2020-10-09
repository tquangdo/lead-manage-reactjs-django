import { combineReducers } from 'redux'
import leadsReducer from './leads'
import errorsReducer from './errors'
import infoMessagesReducer from './infomessages'
import authReducer from './auth'

export default combineReducers({
  leadsReducer,
  errorsReducer,
  infoMessagesReducer,
  authReducer,
})
