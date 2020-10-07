import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS } from '../actions/types.js'

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
    // case DELETE_LEAD:
    //   return {
    //     ...state,
    //     leadsState: state.leadsState.filter((lead) => lead.id !== action.payload),
    //   }
    // case ADD_LEAD:
    //   return {
    //     ...state,
    //     leadsState: [...state.leadsState, action.payload],
    //   }
    // case CLEAR_LEADS:
    //   return {
    //     ...state,
    //     leadsState: [],
    //   }
    default:
      return state
  }
}
