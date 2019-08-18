import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/jobcore-logo.png'

/* eslint-disable */

const Navbar = () => (
    <nav className="navbar navbar-expand-lg justify-content-between px-10">
        <Link to="/">
            <a className="navbar-brand" href="#">
                <img src={Logo} />
            </a>
        </Link>

        <div>
            <div className="text-right">
                <small>
                    <span className="pr-4">(305)555-8473</span>
                    <a className="link px-2 pr-4" href="#">
                        <span className="text-brightblue tiny-arrows">▶</span>My
                        Account
                    </a>
                    <a className="link px-2" href="#">
                        <span className="text-brightblue tiny-arrows">▶</span>
                        Sign In
                    </a>
                </small>
            </div>
            <div>
                <Link to="/job-seekers">
                    <a className="link px-3" href="#">
                        Job Seekers
                        <span className="sr-only">(current)</span>
                    </a>
                </Link>
                <Link to="/positions">
                    <a className="link px-3" href="#">
                        Positions
                    </a>
                </Link>

                <button
                    className="btn radius btn-darkgreen my-2 ml-5 px-4"
                    type="submit"
                >
                    Get Started
                </button>
            </div>
        </div>
    </nav>
)

export default Navbar
