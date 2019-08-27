import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/jobcore-logo.png'

/* eslint-disable */

const Navbar = () => (
    <nav className="navbar justify-content-between px-10">
        <div>
            <Link to="/">
                <a className="navbar-brand" href="#">
                    <img src={Logo} />
                </a>
            </Link>
        </div>

        <div>
            <div className="text-right">
                <small>
                    <span className="pr-4">(305)555-8473</span>
                    <a className="link px-2 pr-4" href="#">
                        <i class="fas fa-caret-right text-brightblue mr-2"></i>
                        My Account
                    </a>
                    <a className="link px-2" href="#">
                        <i class="fas fa-caret-right text-brightblue mr-2"></i>
                        Sign In
                    </a>
                </small>
            </div>
            <div>
                <Link to="/job-seekers">
                    <a className="link px-4" href="#">
                        Job Seekers
                        <span className="sr-only">(current)</span>
                    </a>
                </Link>
                <Link to="/positions">
                    <a className="link px-4" href="#">
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
