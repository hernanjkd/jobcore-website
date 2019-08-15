import React from "react"
import Logo from "../images/jobcore-logo.png"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg justify-content-between">

        <a className="navbar-brand" href="#"><img src={Logo} /></a>

        <div>
            <div className="text-right">
                <span>(305)555-8473</span>
                <a className="link px-2" href="#">My Account</a>
                <a className="link px-2" href="#">Sign In</a>
            </div>
            <div>
                <a className="link px-2" href="#">Job Seekers<span className="sr-only">(current)</span></a>

                <a className="link px-2" href="#">Positions</a>
                <button className="btn radius btn-success my-2 my-sm-0 ml-5 px-4"
                    type="submit">Get Started</button>
            </div>
        </div>
    </nav>
)

export default Navbar
