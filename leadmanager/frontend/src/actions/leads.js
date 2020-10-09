import axios from 'axios'
import { createMessage, onReturnErrors } from './infomessages'
import { onTokenConfig } from './auth'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types'

export const getLeads = () => (dispatch, getState) => {
  axios
    .get('/api/leads/', onTokenConfig(getState)) //nhờ "token" mới KO báo lỗi "Authentication credentials were not provided"
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      })
    })
    .catch((err) => dispatch(onReturnErrors(err.response.data, err.response.status)))
}

export const deleteLead = (arg_id) => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${arg_id}/`, onTokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLeadMsg: 'Lead Deleted' }))
      dispatch({
        type: DELETE_LEAD,
        payload: arg_id,
      })
    })
    .catch((err) => dispatch(onReturnErrors(err.response.data, err.response.status)))
}

export const addLead = (arg_lead) => (dispatch, getState) => {
  axios
    .post('/api/leads/', arg_lead, onTokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLeadMsg: 'Lead Added' }))
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      })
    })
    .catch((err) => dispatch(onReturnErrors(err.response.data, err.response.status)))
}
