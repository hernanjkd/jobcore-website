import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/Player'

//assets
import AppStore from '../images/app-store.png'
import GooglePlay from '../images/google-play.png'
import Magnify from '../images/magnifying-glass.png'
import Star from '../images/star.png'
import Suitcase from '../images/suitcase.png'
import Calendar from '../images/calendar.png'
import Money from '../images/money.png'
import Envelope from '../images/envelope.png'
import Screenshot from '../images/cell-screenshot.png'
import Screenshot2 from '../images/cell-screenshot2.png'
import Review1 from '../images/review1.png'
import Review2 from '../images/review2.png'
import Review3 from '../images/review3.png'
import Customer1 from '../images/customer1.png'
import Customer2 from '../images/customer2.png'
import Customer3 from '../images/customer3.png'

/* eslint-disable */

export default () => (
    <Layout>
        <SEO title="Home" />

        <div className="bg-lightgray py-10 m-0">
            <div className="container">
                <div className="row">
                    <div className="col-6 text-left">
                        <h1 className="">
                            Get work fast &{' '}
                            <span className="text-brightblue">get paid </span>
                            the same day
                        </h1>

                        <p>
                            JobCore is where events are organized: A talent pool
                            of curated workers and hundreds of companies
                            organizing events and hiring everyday.
                        </p>

                        <div className="pt-3 d-flex align-items-center justify-content-center">
                            <input
                                type="text"
                                className="form-control d-inline w-300px"
                                placeholder="Enter Your Email"
                            />

                            <button className="btn radius btn-purple my-2 ml-2 px-4 py-2 d-inline">
                                Get Started
                            </button>
                        </div>

                        <div className="text-center pt-5">
                            <a className="mr-2" href="#">
                                <img src={GooglePlay} />
                            </a>
                            <a href="#">
                                <img src={AppStore} />
                            </a>
                        </div>
                    </div>

                    <div className="col-6">
                        <Player
                            video="0gwvFV9OXuI"
                            height={'300px'}
                            style={{ backgroundColor: '#dcdbdb' }}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-10 px-10 text-center">
            <div className="container">
                <h3>
                    Finally a centralized{' '}
                    <span className="text-brightblue">source of talents </span>
                    and companies!
                </h3>

                <p className="pt-3">
                    Sign up, setup your job preferences and start receiving
                    invitations to work as Chef, Cook, <br />
                    Bartender, Cleaning Staff or any other role surrounding
                    hospitality.
                </p>

                <div className="mt-5 d-flex justify-content-between align-items-end">
                    <div className="w-250px">
                        <img src={Magnify} />
                        <h6 className="mt-2">Find Talent</h6>
                        <p className="text-secondary font-size-13px">
                            Access a talent pool of people in Miami, rated with
                            experience.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Calendar} />
                        <h6 className="mt-3">Schedule Jobs</h6>
                        <p className="text-secondary font-size-13px">
                            Receive live notifications on the best jobs for your preferences.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Suitcase} />
                        <h6 className="mt-3">Get Hired</h6>
                        <p className="text-secondary font-size-13px">
                            Apply to jobs and get hired from your phone, schedule your work.
                        </p>
                    </div>
                </div>

                <div className="mt-5 d-flex justify-content-between align-items-end">
                    <div className="w-250px">
                        <img src={Money} />
                        <h6 className="mt-1">Manage Billing</h6>
                        <p className="text-secondary font-size-13px">
                            Weekly payroll reports with clock in/out payment information.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Envelope} />
                        <h6 className="mt-2">Paid Some Day</h6>
                        <p className="text-secondary font-size-13px">
                            Clock in/out & receive the money into your account in less than 24hrs.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Star} />
                        <h6 className="mt-2">Rate Talent</h6>
                        <p className="text-secondary font-size-13px">
                            Find the best talent and employers with positive ratings.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-lightgray px-10 py-10 m-0 text-center">
            <h3 className="mb-2">
                Finally a job platform for the
                <span className="text-brightblue"> hospitality industry!</span>
            </h3>

            <p>
                Finding talent and jobs in the hospitality industry has never
                been easier.
                <br />
                Sign up today and give it a try!
            </p>

            <div className="mt-4 d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    className="form-control w-300px"
                    placeholder="Enter Your Email"
                />

                <button className="btn radius btn-purple my-2 ml-2 px-4 py-2">
                    Get Started
                </button>
            </div>
        </div>

        <div className="pt-10 text-left d-flex justify-content-center align-items-center">
            <img src={Screenshot2} />

            <div className="ml-5">
                <h3 className="ml-4">
                    Find jobs in minutes and
                    <br />
                    <span className="text-brightblue"> get paid</span> faster
                </h3>
                <ul className="purple-checkmark text-left mt-3">
                    <li>Setup your location, profile and preferences</li>
                    <li>Start receiving invites to work on shifts based <br />on your preferences</li>
                    <li>Apply to the invitations you like</li>
                    <li>Get to work: clock-in and clock-out at the event</li>
                    <li>Get paid in less than 24 hrs</li>
                    <li>It is that simple!</li>
                </ul>
            </div>
        </div>

        <div className="py-10 text-left d-flex justify-content-center align-items-center">
            <div className="mr-5">
                <h3 className="ml-4">
                    Employers can manage
                    <br />
                    <span className="text-brightblue"> talent</span> & payroll
                </h3>
                <ul className="purple-checkmark text-left mt-3">
                    <li>Setup your event and preferences</li>
                    <li>Publish shifts to hundreds of curated talents</li>
                    <li>Hire the talents you want</li>
                    <li>Talent clocks-in/out using our app</li>
                    <li>Manage payroll and pay faster</li>
                    <li>Everything employees need in one platform!</li>
                </ul>
            </div>

            <img src={Screenshot} />
        </div>

        <div className="bg-lightgray px-5 py-10 m-0 text-center">
            <h3 className="mb-1">
                It's never been easier to
                <span className="text-brightblue"> find jobs and hire</span> in
                the hospitality industry.
            </h3>

            <p>
                Sign up today and experience the difference. It's fast and easy!
            </p>

            <button className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3">
                Get Started
            </button>
        </div>

        <div className="py-10 text-left text-center">
            <h3 className="mb-2">
                The <span className="text-brightblue">platform</span> at a
                glance
            </h3>

            <p>
                JobCore provides an easy to use end-to-end experience for
                employers and job seekers
                <br />
                in the hospitality industry on mobile and desktop.
            </p>


            <div className="background-image-platform2" />


            <h3 className="my-4">
                What our <span className="text-brightblue">customers</span> are
                saying about us
            </h3>

            <div className="d-flex justify-content-center py-4">

                <div className="w-280px s900-hide">
                    <img src={Customer1} />
                    <div className="d-flex justify-content-end align-items-center mt-3">
                        <span className="text-left">
                            <div>
                                <small
                                    style={{
                                        position: 'relative',
                                        top: '4px',
                                    }}
                                >
                                    Tanya,
                                    </small>
                            </div>
                            <div>
                                <small
                                    style={{
                                        position: 'relative',
                                        top: '-4px',
                                    }}
                                    className="text-gray"
                                >
                                    Victoria
                                    </small>
                            </div>
                        </span>
                        <img className="mr-3 ml-2" src={Review1} />
                    </div>
                </div>

                <div className="w-280px">
                    <img src={Customer2} />
                    <div className="d-flex justify-content-end align-items-center mt-3">
                        <span className="text-left">
                            <div>
                                <small
                                    style={{
                                        position: 'relative',
                                        top: '4px',
                                    }}
                                >
                                    Lopez,
                                    </small>
                            </div>
                            <div>
                                <small
                                    style={{
                                        position: 'relative',
                                        top: '-4px',
                                    }}
                                    className="text-gray"
                                >
                                    Sofia
                                    </small>
                            </div>
                        </span>
                        <img className="mr-3 ml-2" src={Review2} />
                    </div>
                </div>

                <div className="w-280px">
                    <img src={Customer3} />
                    <div className="d-flex justify-content-end align-items-center mt-3">
                        <span className="text-left">
                            <div>
                                <small
                                    style={{
                                        position: 'relative',
                                        top: '4px',
                                    }}
                                >
                                    Alfonso,
                                    </small>
                            </div>
                            <div>
                                <small
                                    style={{
                                        position: 'relative',
                                        top: '-4px',
                                    }}
                                    className="text-gray"
                                >
                                    John
                                    </small>
                            </div>
                        </span>
                        <img className="mr-3 ml-2" src={Review3} />
                    </div>
                </div>

            </div>

            <h3 className="pt-5 mt-3">
                It's never been easier{' '}
                <span className="text-brightblue">find jobs and hire</span> in
                the hospitality industry.
            </h3>

            <p className="mb-4">
                Sign up today and experience the difference. It's fast and easy!
            </p>

            <div className="d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    className="form-control w-300px"
                    placeholder="Enter Your Email"
                />

                <button className="btn radius btn-purple my-2 ml-2 px-4 py-2">
                    Get Started
                </button>
            </div>
        </div>
    </Layout>
)
