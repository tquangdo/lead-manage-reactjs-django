import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'

export class ReactAlerts extends Component {
  componentDidUpdate(prevProps) {
    const { errorProps, alert, infoMessageProps } = this.props
    const { name, email, message, non_field_errors, username } = errorProps.msgState
    if (errorProps !== prevProps.errorProps) {
      if (name) alert.error(`Name: ${name.join()}`)
      else if (email) alert.error(`Email: ${email.join()}`)
      else if (message) alert.error(`Message: ${message.join()}`)
      else if (non_field_errors) alert.error(non_field_errors.join())
      else if (username) alert.error(username.join())
      else alert.error(errorProps.msgState.detail)
    }

    const { deleteLeadMsg, addLeadMsg, passwordNotMatchMsg } = infoMessageProps
    if (infoMessageProps !== prevProps.infoMessageProps) {
      if (deleteLeadMsg) alert.success(deleteLeadMsg)
      else if (addLeadMsg) alert.success(addLeadMsg)
      else if (passwordNotMatchMsg) alert.error(passwordNotMatchMsg)
      else alert.error(infoMessageProps)
    }
  }

  render() {
    return <Fragment />
  }
}

const mapStateToProps = (state) => ({
  errorProps: state.errorsReducer,
  infoMessageProps: state.infoMessagesReducer,
})

export default connect(mapStateToProps)(withAlert()(ReactAlerts))
