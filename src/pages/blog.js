import React from 'react'
import Layout from '../components/layout'

import People from '../images/blog-people.png'

/* eslint-disable */

const Blog = () => (
    <Layout>
        <div className="darkgreen-top-image d-flex align-items-center px-10">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">
                        Blog
                    </span>
                </h1>
            </div>
        </div>
        <div className="d-flex justify-content-center my-5 px-5">

            <div className="w-620px mr-3">
                <img src={People} />
                <h4 className="pt-3">Everything you need to know about events</h4>
                <small className="text-secondary">
                    12 Jan, 2019 by <a className="text-brightblue">Meras Zabria</a>
                </small>
                <p className="text-gray py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores alias temporibus sequi ex modi consectetur nam pariatur ad, totam vel eius, animi quo repellat reprehenderit maxime quibusdam earum aspernatur.
                </p>
                <button className="btn radius btn-darkgreen px-4 py-2 mb-3">
                    Read More
                </button>

                <hr className="w-620px pb-3" />

                <img src={People} />
                <h4 className="pt-3">Getting married during the summer and the risks</h4>
                <small className="text-secondary">
                    12 Jan, 2019 by <a className="text-brightblue">Meras Zabria</a>
                </small>
                <p className="text-gray py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores alias temporibus sequi ex modi consectetur nam pariatur ad, totam vel eius, animi quo repellat reprehenderit maxime quibusdam earum aspernatur.
                </p>
                <button className="btn radius btn-darkgreen px-4 py-2 mb-3">
                    Read More
                </button>

                <hr className="w-620px pb-3" />

                <img src={People} />
                <h4 className="pt-3">Everything you need to know about Banking</h4>
                <small className="text-secondary">
                    12 Jan, 2019 by <a className="text-brightblue">Meras Zabria</a>
                </small>
                <p className="text-gray py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores alias temporibus sequi ex modi consectetur nam pariatur ad, totam vel eius, animi quo repellat reprehenderit maxime quibusdam earum aspernatur.
                </p>
                <button className="btn radius btn-darkgreen px-4 py-2 mb-3">
                    Read More
                </button>
            </div>

            <div className="w-280px s800-hide">
                <div className="border py-4 px-3 text-center">
                    <h2 className="text-brightblue my-4">Apply Here</h2>

                    <div className="d-flex align-items-center justify-content-start my-4">
                        <i class="fas fa-map-marker-alt text-purple mr-3 font-size-23px"></i>
                        <span className="text-left">
                            <div className="text-gray font-size-13px">
                                Position
                                </div>
                            <div className="font-size-15px">
                                Miami Beach, Florida
                                </div>
                        </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-start my-4">
                        <i class="far fa-calendar-check text-purple mr-3 font-size-23px"></i>
                        <span className="text-left">
                            <div className="text-gray font-size-13px">
                                Salary
                                </div>
                            <div className="font-size-15px">
                                $ 11.53 - $ 12.33 / Hour
                                </div>
                        </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-start my-4">
                        <i class="far fa-address-card text-purple mr-3 fa-lg"></i>
                        <span className="text-left">
                            <div className="text-gray font-size-13px">
                                Job Type
                                </div>
                            <div className="font-size-15px">
                                Contract - Part Time
                                </div>
                        </span>
                    </div>

                    <div className="text-gray font-size-13px text-left">
                        Category
                        </div>
                    <div className="font-size-15px text-left">
                        Wedding Events & Organizers - Event Operators
                        </div>

                    <div className="text-gray font-size-12px text-left mt-4">
                        Reference number
                        </div>
                    <div className="font-size-14px text-left">
                        US_EN_99_038298_372849
                        </div>

                    <h2 className="text-brightblue my-4">Apply Here</h2>

                    <button
                        className="btn radius btn-purple my-2 px-5 py-3"
                    >
                        Get Started
                        </button>
                </div>
            </div>

        </div>

    </Layout>
)

export default Blog
