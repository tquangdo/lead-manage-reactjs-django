import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js'

const initialState = {
  leadsState: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leadsState: action.payload,
      }
    case DELETE_LEAD:
      return {
        ...state,
        leadsState: state.leadsState.filter((lead_item) => lead_item.id !== action.payload),
      }
    case ADD_LEAD:
      return {
        ...state,
        leadsState: [...state.leadsState, action.payload],
      }
    default:
      return state
  }
}
