import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { onLogout } from '../../actions/auth'

export class Header extends Component {
    render() {
        const { authProps, onLogout } = this.props
        const { user } = authProps
        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ''}</strong>
                </span>
                <li className="nav-item">
                    <button onClick={onLogout} className="nav-link btn btn-info btn-sm text-light">
                        Logout
                    </button>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        )

        return (
            // https://getbootstrap.com/ > Components > navbar > Toggler
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">User Manager</a>
                    </div>
                    {(localStorage.getItem('TOKEN_LC_STORAGE')) ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    authProps: state.authReducer,
})

export default connect(mapStateToProps, { onLogout })(Header)

