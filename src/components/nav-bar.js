import React from "react"
import Logo from "../images/jobcore-logo.png"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg justify-content-between">
    
        <a className="navbar-brand" href="#"><img src={Logo} /></a>

        <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Job Seekers<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Positions</a>
                </li>
            </ul>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Get Started</button>
        </div>
    </nav>
)

export default Navbar
