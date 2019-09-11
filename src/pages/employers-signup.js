import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

/* eslint-disable */

const EmployersSignUp = () => (
    <Layout>
        <SEO title="Sign Up" />

        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">Employers
                        <span className="text-brightblue"> Sign Up</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="container my-5">
            <div className="mx-auto w-800px-max py-5">
                <h2 className="text-brightblue mb-5">Request A Demo</h2>

                <form>
                    <div className="form-row s700-display-column">
                        <div className="form-group col py-1 has-feedback has-feedback-right">
                            <label className=""><h6>First Name</h6></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="John"
                            />
                            <i className="glyphicon glyphicon-user form-control-feedback"></i>
                        </div>
                        <div className="form-group col py-1">
                            <label className=""><h6>Last Name</h6></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div className="form-row s700-display-column">
                        <div className="form-group col py-1">
                            <label className=""><h6>Business Email</h6></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="example@company.com"
                            />
                        </div>
                        <div className="form-group col py-1">
                            <label className=""><h6>Phone Number</h6></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="3055557475"
                            />
                        </div>
                    </div>
                    <div className="form-row s700-display-column">
                        <div className="form-group col py-1">
                            <label className=""><h6>Business Name</h6></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Company Name"
                            />
                        </div>
                        <div className="form-group col py-1">
                            <label className=""><h6>Business Website</h6></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="company.com"
                            />
                        </div>
                    </div>
                    <div className="form-row s700-display-column">
                        <div className="form-group col py-1">
                            <label className=""><h6>Tell us about your business</h6></label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
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

export default EmployersSignUp
