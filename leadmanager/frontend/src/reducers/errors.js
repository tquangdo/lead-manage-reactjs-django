import { GET_ERRORS } from '../actions/types'

const initialState = {
  msgState: {},
  statusState: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msgState: action.payload.msg,
        statusState: action.payload.status,
      }
    default:
      return state
  }
}
