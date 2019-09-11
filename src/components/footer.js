import React from 'react'
import { Link } from 'gatsby'

//assets
import Logo from '../images/jobcore-logo-green.png'
import Google from '../images/google-play-green.png'
import App from '../images/app-store-green.png'

/* eslint-disable */

const Footer = () => (
    <footer className="text-light d-flex justify-content-around s1000-display-column">
        <div className="d-flex justify-content-around s700-display-column">
            <div className="s700-mx-auto py-2 mb-3 pr-9">
                <Link to="/">
                    <a>
                        <img className="pb-4" src={Logo} />
                    </a>
                </Link>
                <div>All Rights Reserved © jobcore.co</div>
                <div className="pb-4">(305)555-8473</div>
                <Link to="/terms">
                    <a>Terms & Conditions</a>
                </Link>
                <span className="px-2">/</span>
                <Link to="/privacy">
                    <a>Privacy Policy</a>
                </Link>
            </div>
            <div className="d-flex justify-content-center">
                <div className="mr-4">
                    <strong>Quick Links</strong>
                    <ul>
                        <li>
                            <Link to="/job-seekers">
                                <a>Job Seekers</a>
                            </Link>
                        </li>
                        <li>
                            <a href="#">Employers</a>
                        </li>
                        <li>
                            <Link to="/positions">
                                <a>Positions</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <a>Our Story</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="ml-2">
                    <strong>Resources</strong>
                    <ul>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">How to Apply (FAQ)</a>
                        </li>
                        <li>
                            <a href="#">Case Studies</a>
                        </li>
                        <li>
                            <a href="#">Prices</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center pt-3">
            <div className="pb-4">
                <span className="round-links bg-white mr-3">
                    <a href="#">
                        <span className="d-flex align-items-center justify-content-center">
                            <i class="fab fa-facebook-f"></i>
                        </span>
                    </a>
                </span>
                <span className="round-links bg-white mr-3">
                    <a href="#">
                        <span className="d-flex align-items-center justify-content-center">
                            <i class="fab fa-twitter"></i>
                        </span>
                    </a>
                </span>
                <span className="round-links bg-white mr-3">
                    <a href="#">
                        <span className="d-flex align-items-center justify-content-center">
                            <i class="fab fa-instagram"></i>
                        </span>
                    </a>
                </span>
                <span className="round-links bg-white">
                    <a href="#">
                        <span className="d-flex align-items-center justify-content-center">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </a>
                </span>
            </div>
            <a href="#">
                <img className="pr-2" height="45px" src={App} />
            </a>
            <a href="#">
                <img height="45px" src={Google} />
            </a>
        </div>
    </footer>
)

export default Footer
