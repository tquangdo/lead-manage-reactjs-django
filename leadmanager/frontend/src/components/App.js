import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import myStore from '../store'
import { Provider as AlertProvider, positions as AlertPositions } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ReactAlerts from './layout/ReactAlerts'
// fullstack với Django phải dùng "HashRouter", KO được "BrowserRouter"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './accounts/Register'
import Login from './accounts/Login'
import PrivateRoute from './common/PrivateRoute'

const alertOpts = {
    timeout: 3000,
    position: AlertPositions.TOP_CENTER,
}

class App extends Component {
    render() {
        return (
            <Provider store={myStore}>
                <AlertProvider template={AlertTemplate} {...alertOpts}>
                    <Router>
                        <Fragment>
                            <Header />
                            <ReactAlerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path='/' component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app-id'))