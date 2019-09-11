import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/jobcore-logo.png'

/* eslint-disable */

export default () => (
    <nav className="navbar justify-content-between px-10 s1000-display-column s700-collapse-padding">
        <Link to="/">
            <img className="navbar-brand" src={Logo} />
        </Link>

        <div>
            <div className="text-right nav-top">
                <small>
                    <span className="pr-4">(305)555-8473</span>
                    <Link to="/login" activeClassName="active">
                        <a className="link px-2 pr-4">
                            <i class="fas fa-caret-right text-brightblue mr-2"></i>
                            My Account
                    </a>
                    </Link>
                    <Link to="/sign-in" activeClassName="active">
                        <a className="link px-2">
                            <i class="fas fa-caret-right text-brightblue mr-2"></i>
                            Sign In
                    </a>
                    </Link>
                </small>
            </div>
            <div>
                <Link to="/job-seekers" activeClassName="active">
                    <a className="link px-3 s700-collapse-padding">
                        Job Seekers
                    </a>
                </Link>
                <Link to="/employers" activeClassName="active">
                    <a className="link px-3 s700-collapse-padding">
                        Employers
                    </a>
                </Link>
                <Link to="/positions" activeClassName="active">
                    <a className="link px-3 s700-collapse-padding">
                        Positions
                    </a>
                </Link>

                <button
                    className="btn radius btn-darkgreen my-2 px-4 s700-collapse-margin"
                    type="submit"
                >
                    Get Started
                </button>
            </div>
        </div>
    </nav>
)
