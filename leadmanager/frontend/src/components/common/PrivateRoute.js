import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, authProps, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (authProps.isLoading) {
        return <h2>Loading...</h2>
      } else if (localStorage.getItem('TOKEN_LC_STORAGE')) {
        return <Component {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
  />
)

const mapStateToProps = (state) => ({
  authProps: state.authReducer,
})

export default connect(mapStateToProps)(PrivateRoute)
