import React from "react"

//assets
import Logo from "../images/jobcore-logo-green.png"
import Google from "../images/google-play-green.png"
import App from "../images/app-store-green.png"
import Links from "../images/links.png"

const Footer = () => (

    <footer className="text-light d-flex justify-content-around">

        <div className="pt-2">
            <a href="#"><img className="pb-4" src={Logo} /></a>
            <div>All Rights Reserved © jobcore.co</div>
            <div className="pb-4">(305)555-8473</div>
            <a href="#">Terms & Conditions</a>
            <span className="px-2">/</span>
            <a href="#">Privacy Policy</a>
        </div>

        <div>
            <strong>Quick Links</strong>
            <ul>
                <li><a href="#">Job Seekers</a></li>
                <li><a href="#">Employers</a></li>
                <li><a href="#">Positions</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div>
            <strong>Resources</strong>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">How to Apply (FAQ)</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Prices</a></li>
            </ul>
        </div>

        <div className="text-center pt-3">
            <div className="pb-4">
                <img src={Links} />
            </div>
            <a href="#"><img className="pr-2" height="45px" src={App} /></a>
            <a href="#"><img height="45px" src={Google} /></a>
        </div>

    </footer>
)

export default Footer
