import React from 'react'
import Layout from '../components/layout'

//assets
import VerticalLinks from '../images/vertical-links.png'
import JobCalendar from '../images/job-calendar.png'

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

                <div className="col-3 text-center">
                    <div className="border job-seekers-card py-4 px-3">
                        <h2 className="text-brightblue my-4">Apply Here</h2>

                        <div className="d-flex justify-content-start text-left">
                            <i class="fas fa-map-marker-alt text-purple mr-2 fa-lg"></i>
                            <span>
                                <div className="text-gray">Position</div>
                                <div>Miami Beach, Florida</div>
                            </span>
                        </div>
                        <i class="far fa-calendar-check text-purple mr-2 fa-lg"></i>
                        <i class="far fa-address-card text-purple mr-2 fa-lg"></i>

                        <img className="mb-3" src={JobCalendar} />

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
