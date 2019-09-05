import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/Player'

//assets
import AppStore from '../images/app-store.png'
import GooglePlay from '../images/google-play.png'
import Clock from '../images/clock.png'
import Magnify from '../images/magnifying-glass.png'
import Suitcase from '../images/suitcase.png'
import Calendar from '../images/calendar.png'
import Money from '../images/money.png'
import Envelope from '../images/envelope.png'
import Screenshot from '../images/cell-screenshot.png'
import Platform from '../images/platform-glance.png'
import Review1 from '../images/review1.png'
import Review2 from '../images/review2.png'
import Review3 from '../images/review3.png'

/* eslint-disable */

const IndexPage = () => (
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

                            <button
                                className="btn radius btn-purple my-2 ml-2 px-4 py-2 d-inline"
                            >
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
                        <img src={Suitcase} />
                        <h6 className="mt-3">Publish Shifts</h6>
                        <p>
                            Setup your job and preferences in a custom calendar.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Magnify} />
                        <h6 className="mt-2">Find Talent</h6>
                        <p>
                            Access a talent pool of people in Miami, rated with
                            experience.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Calendar} />
                        <h6 className="mt-3">Manage Schedule</h6>
                        <p>
                            Automatically send employees job location and shift
                            times.
                        </p>
                    </div>
                </div>

                <div className="mt-5 d-flex justify-content-between align-items-end">
                    <div className="w-250px">
                        <img src={Clock} />
                        <h6 className="mt-1">Clock In-Out</h6>
                        <p>
                            Track employee performance with GPS located clock
                            in-out features.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Money} />
                        <h6 className="mt-2">Payroll Reports</h6>
                        <p>
                            Instant payroll reports based on employee activity.
                        </p>
                    </div>
                    <div className="w-250px">
                        <img src={Envelope} />
                        <h6 className="mt-2">Direct Payments</h6>
                        <p>Direct ACH payments to employee bank accounts.</p>
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

                <button
                    className="btn radius btn-purple my-2 ml-2 px-4 py-2"
                >
                    Get Started
                </button>
            </div>
        </div>

        <div className="py-10 px-15 text-left d-flex justify-content-around align-items-center">
            <div>
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

            <button
                className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3"
            >
                Get Started
            </button>
        </div>

        <div className="py-10 px-10 text-left text-center">
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

            <img className="my-4 mx-auto" src={Platform} />

            <h3 className="my-4">
                What our <span className="text-brightblue">customers</span> are
                saying about us
            </h3>

            <div className="container px-5">
                <div className="row">
                    <div className="col m-1 p-2">
                        <div className="w-280px mx-auto">
                            <div className="reviews">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Ipsa obcaecati adipisci cum nulla, ipsum odio
                                fugit obcaecati sequi eius dicta officia vel quo
                                numquam est, dolores magnam culpa ullam quas
                                obcaecati perspiciatis, repellat nesciunt eum
                                inventore. Aspernatur ipsum distinctio, sunt
                                possimus ipsa iste placeat.
                        </div>
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
                            </div></div>
                    </div>
                    <div className="col m-1 p-2">
                        <div className="w-280px mx-auto">
                            <div className="reviews">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Accusantium aperiam sequi perspiciatis atque
                                eligendi, culpa omnis sint cupiditate obcaecati
                                voluptatum delectus ab illo inventore in. Excepturi
                                voluptatibus accusantium facilis! Sit atque aliquam
                                officia fugiat ullam nesciunt sed laborum dolorum a!
                        </div>
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
                            </div></div>
                    </div>
                    <div className="col m-1 p-2">
                        <div className="w-280px mx-auto">
                            <div className="reviews">
                                Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit. Autem commodi quos obcaecati at placeat ut
                                natus iure aut eius dolore culpa ullam, perferendis,
                                aperiam nemo quibusdam magnam. Sequi cumque harum ex
                                dolore incidunt culpa ullam laboriosam odit sit,
                                necessitatibus, praesentium provident in?
                        </div>
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
                            </div></div>
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

                <button
                    className="btn radius btn-purple my-2 ml-2 px-4 py-2"
                >
                    Get Started
                </button>
            </div>
        </div>
    </Layout>
)

export default IndexPage
