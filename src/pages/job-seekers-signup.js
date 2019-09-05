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
                        <span className="text-brightblue"> Signup</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="container my-5">
            <div className="mx-auto w-400px py-5">
                <h2 className="text-brightblue mb-5">Sign Up Now</h2>

                <form>
                    <div className="form-group py-2">
                        <label className=""><h6>First Name</h6></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="John"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className=""><h6>Last Name</h6></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Doe"
                        />
                    </div>
                    <h6 className="mt-4">Password</h6>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="password"
                    />
                    <div className="pt-3 text-gray">
                        <small>
                            <input type="checkbox" /> Remember Password
                        </small>
                    </div>
                    <button
                        className="btn radius btn-purple mt-5 ml-3 px-5 py-2"
                    >
                        Login
                    </button>
                </form>

                <div className="pt-3">
                    <small className="text-secondary">Don't have an account?
                        <Link to="/sign-up">
                            <a className="text-success" href=""> Sign Up Now</a>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    </Layout>
)

export default JobSeekersSignUp
