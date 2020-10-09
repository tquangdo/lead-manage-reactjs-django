import axios from 'axios'
import { onReturnErrors } from './infomessages'

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types'

// Youtuber "Traversy Media" có code nhưng thấy KO cần!!!
// export const loadUser = () => (dispatch, getState) => {
//   // User Loading
//   dispatch({ type: USER_LOADING })

//   axios
//     .get('/api/auth/user', onTokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data,
//       })
//     })
//     .catch((err) => {
//       dispatch(onReturnErrors(err.response.data, err.response.status))
//       dispatch({
//         type: AUTH_ERROR,
//       })
//     })
// }

export const onLogin = (username, password) => (dispatch) => {
  const config = onSetConfigHeader()
  // Request Body
  const body = JSON.stringify({ username, password })

  axios
    .post('/api/auth/login', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch(onReturnErrors(err.response.data, err.response.status))
      dispatch({
        type: LOGIN_FAIL,
      })
    })
}

export const onRegister = ({ username, password, email }) => (dispatch) => {
  const config = onSetConfigHeader()
  // Request Body
  const body = JSON.stringify({ username, email, password })

  axios
    .post('/api/auth/register', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch(onReturnErrors(err.response.data, err.response.status))
      dispatch({
        type: REGISTER_FAIL,
      })
    })
}

// được gọi từ Header.js, KO truyền args nào
// -> (dispatch, getState) là default args
export const onLogout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, onTokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch((err) => {
      dispatch(onReturnErrors(err.response.data, err.response.status))
    })
}

// Setup config with token - helper function
export const onTokenConfig = (getState) => {
  // Get token from state
  const token = getState().authReducer.token
  const config = onSetConfigHeader()
  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
}

export const onSetConfigHeader = () => {
  const configResult = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return configResult
}
