import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import myStore from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={myStore}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app-id'))