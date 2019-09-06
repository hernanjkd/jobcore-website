import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

/* eslint-disable */

const JobSeekersSignUp = () => (
    <Layout>
        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">Job Seekers
                        <span className="text-brightblue"> Sign Up</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="container my-5">
            <div className="mx-auto w-400px py-5">
                <h2 className="text-brightblue mb-5">Sign Up Now</h2>

                <form>
                    <div className="form-group py-1">
                        <label className=""><h6>First Name</h6></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="John"
                        />
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Last Name</h6></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Your Email</h6></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Cell Number</h6></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="3055557475"
                        />
                    </div>
                    <button
                        className="btn radius btn-purple mt-5 ml-3 px-5 py-2"
                    >
                        SIGN UP
                    </button>
                    <div className="pt-4 text-gray">
                        <small>
                            By clicking the button above you agree to the<br />
                            <Link to="/terms">
                                <a> Terms of Service </a>
                            </Link>
                            and
                            <Link to="/privacy">
                                <a> Privacy Policy</a>
                            </Link>
                            .
                            <div className="d-flex justify-content-start mt-3">
                                <input className="mt-1 mr-2" type="checkbox" />
                                <div>
                                    I consent to receive updates and agree to receive occasional
                                    automated text message from JobCore. Message and data rates may
                                    apply. Text STOP to cancel or HELP for help.
                                </div>
                            </div>
                        </small>
                    </div>
                </form>

            </div>
        </div>
    </Layout>
)

export default JobSeekersSignUp
