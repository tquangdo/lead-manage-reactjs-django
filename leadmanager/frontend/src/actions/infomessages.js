import { CREATE_MESSAGE, GET_ERRORS } from './types'

export const createMessage = (arg_msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: arg_msg,
  }
}

// (msg, status) hiện English theo Django RestFW, KO thể sửa thành VNese
// B1: truyền cho errors.js>GET_ERRORS:(msgState, statusState)
// B2: App.js>ReactAlerts.js>componentDidUpdate(): errorProps
// B3: hiện 5 lỗi về: name, email, message, non_field_errors, username + ELSE
export const onReturnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }, //theo cách đặt tên biến trong reducers>errors.js, nên ở đây truyền cho "payload" phải là fix name: "msg, status"
  }
}
