import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/jobcore-logo.png'

/* eslint-disable */

const Navbar = () => (
    <nav className="navbar justify-content-between px-10">
        <Link to="/">
            <img className="navbar-brand" src={Logo} />
        </Link>

        <div>
            <div className="text-right nav-top">
                <small>
                    <span className="pr-4">(305)555-8473</span>
                    <Link to="/login">
                        <a className="link px-2 pr-4">
                            <i class="fas fa-caret-right text-brightblue mr-2"></i>
                            My Account
                    </a>
                    </Link>
                    <Link to="/sign-in">
                        <a className="link px-2">
                            <i class="fas fa-caret-right text-brightblue mr-2"></i>
                            Sign In
                    </a>
                    </Link>
                </small>
            </div>
            <div>
                <Link to="/job-seekers">
                    <a className="link px-4">
                        Job Seekers
                    </a>
                </Link>
                <Link to="/positions">
                    <a className="link px-4">
                        Positions
                    </a>
                </Link>

                <button
                    className="btn radius btn-darkgreen my-2 px-4"
                    type="submit"
                >
                    Get Started
                </button>
            </div>
        </div>
    </nav>
)

export default Navbar
