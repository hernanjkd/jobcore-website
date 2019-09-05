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

        <div className="my-5 pb-5 d-flex justify-content-center align-items-center s900-display-column-reverse">
            <form className="p-5 shadow w-600px ">
                <h2 className="mb-4 mt-2">Get In Touch</h2>
                <div className="form-row">
                    <div className="col form-group">
                        <input className="form-control" type="text" placeholder="First Name" />
                    </div>
                    <div className="col form-group">
                        <input className="form-control" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="4" type="text" placeholder="Your Message" />
                </div>
                <div className="text-right">
                    <button className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3">
                        Send Now
                    </button>
                </div>
            </form>
            <div className="w-400px py-5 bg-brightblue-opacity text-white">
                <div className="d-flex justify-content-start ml-3 pb-4">
                    <div className="round-links d-flex align-items-center justify-content-center mx-3">
                        <i class="fas fa-map-marker-alt text-purple fa-md"></i>
                    </div>
                    <div>
                        <h5>Email Address</h5>
                        <div className="font-size-15px">youremail@gomain.com</div>
                        <div className="font-size-15px">help@example.com</div>
                    </div>
                </div>
                <div className="d-flex justify-content-start ml-3 py-4">
                    <div className="round-links d-flex align-items-center justify-content-center mx-3">
                        <i class="fas fa-envelope text-purple fa-md"></i>
                    </div>
                    <div>
                        <h5>Phone Number</h5>
                        <div className="font-size-15px">(305) 555-7473</div>
                    </div>
                </div>
                <div className="d-flex justify-content-start ml-3 pt-4">
                    <div className="round-links d-flex align-items-center justify-content-center mx-3">
                        <i class="fas fa-phone-alt text-purple fa-md"></i>
                    </div>
                    <div>
                        <h5>Our Head Office</h5>
                        <div className="font-size-15px">270 Catalania Ave #003</div>
                        <div className="font-size-15px">Coral Gables, FL 33134</div>
                    </div>
                </div>
            </div>
        </div>



    </Layout>
)

export default Contact