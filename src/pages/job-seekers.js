import React from 'react'
import Layout from '../components/layout'

//assets
import VerticalLinks from '../images/vertical-links.png'

/* eslint-disable */

const JobSeekers = () => (
    <Layout>
        <div className="job-seekers-top-image d-flex align-items-center px-10">
            <div>
                <h1>Events Coordinator in Miami</h1>
                <h5>Ends in 3 Days 21h 33m 9s</h5>
            </div>
        </div>
        <div className="container job-seekers-content my-5 px-5">
            <div className="row">
                <div className="col-1">
                    <img src={VerticalLinks} />
                </div>

                <div className="col">
                    <h4>Job Brief</h4>

                    <p>
                        We are looking for a successful and enthuthiastic event
                        planner to produce events from through conecption
                        through the completion. Event coordinator
                        responsibilities include providing outstanding customer
                        service and organizing memorable events that meet
                        quality expectations.
                    </p>

                    <h4 className="mt-5">Responsibilities</h4>

                    <ul className="purple-checkmark">
                        <li>
                            Event planning, design and production while managing
                            all project delivery elements whithin time limits
                        </li>
                        <li>
                            Liaise with clients to identify their needs and to
                            ensure customer satisfaction
                        </li>
                        <li>
                            Conduct market research, gather information and
                            negotiate contracts prior to closing any deals
                        </li>
                        <li>
                            Provide feedback and periodic reports to
                            stakeholders
                        </li>
                        <li>
                            Propose ideas to improve services and event quality
                        </li>
                        <li>
                            Ensure compliance with insurance, legal, health and
                            safety obligations
                        </li>
                    </ul>
                </div>

                <div className="col-3">
                    <div className="border job-seekers-card py-4 px-3 text-center">
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
                            type="submit"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default JobSeekers
