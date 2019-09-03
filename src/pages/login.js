import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

/* eslint-disable */

const Login = () => (
    <Layout>
        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">Login Your
                        <span className="text-brightblue"> Account</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="container my-5">
            <div className="mx-auto w-400px py-5">
                <h2>Login</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <h6 className="mt-5">Email</h6>
                <input
                    type="text"
                    className="form-control"
                    placeholder="example@gmail.com"
                />
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

export default Login
