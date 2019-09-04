import React from 'react'
import Layout from '../components/layout'
import PositionCard from '../components/position-card'

/* eslint-disable */

const JobSeekers = () => (
    <Layout>
        <div className="gray-top-image d-flex align-items-center px-10">
            <div>
                <h1>Events Coordinator in Miami</h1>
                <h5>Ends in 3 Days 21h 33m 9s</h5>
            </div>
        </div>
        <div className="container job-seekers-content my-5 px-5">
            <div className="row">
                <div className="col-1 text-gray s800-hide">
                    <div className="font-size-11px mb-2">Share</div>
                    <a href="#">
                        <div className="border job-seekers-links">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div
                            style={{ top: '-1px' }}
                            className="border job-seekers-links position-relative"
                        >
                            <i class="fab fa-twitter"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div
                            style={{ top: '-2px' }}
                            className="border job-seekers-links position-relative"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div
                            style={{ top: '-3px' }}
                            className="border job-seekers-links position-relative"
                        >
                            <i class="fas fa-envelope"></i>
                        </div>
                    </a>
                </div>

                <div className="col">
                    <button
                        className="btn btn-small radius btn-darkgreen d-inline mb-3"
                    >
                        Freelance
                    </button>
                    <h5>Job Brief</h5>

                    <p>
                        We are looking for a successful and enthuthiastic event
                        planner to produce events from through conecption
                        through the completion. Event coordinator
                        responsibilities include providing outstanding customer
                        service and organizing memorable events that meet
                        quality expectations.
                    </p>

                    <h5 className="mt-5">Responsibilities</h5>

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

                <div className="col-3 s1000-hide">
                    <div className="job-seekers-card border py-4 px-3 text-center">
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
        </div>
        <div className="container my-5 py-5">
            <h2 className="ml-5 pl-5">
                Similar <span className="text-brightblue">Jobs</span>
            </h2>
            <div className="d-flex justify-content-around align-items-center my-4">
                <a href="#">
                    <i class="fas fa-arrow-circle-left fa-3x text-gray hover-highlight"></i>
                </a>

                <span>
                    <PositionCard
                        data={{
                            location: 'Miami Beach',
                            amount: '$11.53 - $12.03',
                            position: 'Bartenders',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Freelance',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </span>
                <span className="s1000-hide">
                    <PositionCard
                        data={{
                            location: 'Coral Gables',
                            amount: '$11.53 - $12.03',
                            position: 'Servers',
                            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore laborum aperiam officiis eos in esse saepe iusto nam.`,
                            type: 'Part Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </span>
                <span className="s700-hide">
                    <PositionCard
                        data={{
                            location: 'Key Biscayne',
                            amount: '$11.53 - $12.03',
                            position: 'Maids',
                            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nostrum eum consequuntur fuga sit nihil enim tempora ex.`,
                            type: 'Full Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </span>
                <a href="#">
                    <i class="fas fa-arrow-circle-right fa-3x text-gray hover-highlight"></i>
                </a>
            </div>
        </div>
    </Layout>
)

export default JobSeekers
