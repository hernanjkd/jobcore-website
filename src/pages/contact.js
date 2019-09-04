import React from 'react'
import Layout from '../components/layout'

/* eslint-disable */

const Contact = () => (
    <Layout>
        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">
                        Contact <span className="text-brightblue"> Us</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="my-5">
            <form className="py-5 shadow">
                <h2>Get In Touch</h2>
                <div className="form-row">
                    <input className="form-control" type="text" placeholder="First Name" />
                    <input className="form-control" type="text" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <input style={{ width: "700px" }} className="form-control form-group-lg" type="text" placeholder="Your Email" />
                </div>
                <textarea className="form-control" type="text" placeholder="Your Message" />
            </form>
            <div className="w-500px py-5">

            </div>
        </div>

    </Layout>
)

export default Contact
