import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('TOKEN_LC_STORAGE'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    // Youtuber "Traversy Media" có code nhưng thấy KO cần!!!
    // case USER_LOADING:
    //     return {
    //       ...state,
    //       isLoading: true,
    //     }
    //   case USER_LOADED:
    //     return {
    //       ...state,
    //       isAuthenticated: true,
    //       isLoading: false,
    //       user: action.payload,
    //     }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('TOKEN_LC_STORAGE', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      }
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('TOKEN_LC_STORAGE')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    default:
      return state
  }
}
