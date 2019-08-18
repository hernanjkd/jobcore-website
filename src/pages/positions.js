import React from 'react'
import Layout from '../components/layout'
import PositionCard from '../components/position-card'

//assets
import Temp from '../images/positions.png'

const Positions = () => (
    <Layout>
        <div className="positions-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1>
                    <strong>
                        Every Job In
                        <span className="text-brightblue"> One Place</span>
                    </strong>
                </h1>
                <h4>
                    <strong>
                        Your <span className="text-brightblue">Dream Job</span>{' '}
                        Just A Click Away!
                    </strong>
                </h4>
                <div>Want to find a job? We have 263</div>

                <div className="input-group py-5 px-10">
                    <input
                        type="text"
                        className="form-control border-0 rounded-0"
                        placeholder="Keywords"
                        size="20"
                    />
                    <select class="custom-select border-top-0 border-bottom-0 border-right-0">
                        <option selected>Location</option>
                        <option value="1">Miami Beach</option>
                        <option value="2">Coral Gables</option>
                        <option value="3">Downtown</option>
                        <option value="4">Key Biscayne</option>
                    </select>
                    <div className="input-group-append rounded-0">
                        <span className="input-group-text btn-purple border-0 rounded-0 px-4">
                            Get Started
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container text-center my-5 py-5">
            <div className="row my-2">
                <div className="col" />
                <div className="col my-2">
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
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Coral Gables',
                            amount: '$11.53 - $12.03',
                            position: 'Servers',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Part Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Key Biscayne',
                            amount: '$11.53 - $12.03',
                            position: 'Maids',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Full Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col" />
            </div>
            <div className="row my-2">
                <div className="col" />
                <div className="col my-2">
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
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Coral Gables',
                            amount: '$11.53 - $12.03',
                            position: 'Servers',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Part Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Key Biscayne',
                            amount: '$11.53 - $12.03',
                            position: 'Maids',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Full Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col" />
            </div>
            <div className="row my-2">
                <div className="col" />
                <div className="col my-2">
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
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Coral Gables',
                            amount: '$11.53 - $12.03',
                            position: 'Servers',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Part Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Key Biscayne',
                            amount: '$11.53 - $12.03',
                            position: 'Maids',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Full Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col" />
            </div>
            <div className="row my-2">
                <div className="col" />
                <div className="col my-2">
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
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Coral Gables',
                            amount: '$11.53 - $12.03',
                            position: 'Servers',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Part Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col my-2">
                    <PositionCard
                        data={{
                            location: 'Key Biscayne',
                            amount: '$11.53 - $12.03',
                            position: 'Maids',
                            description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
            enim delec saepe cumque totam dolor aut reprehenderit optio
            itaque magni.`,
                            type: 'Full Time',
                            expiration: 'Ends in 3 Days 21h 24m 36s',
                        }}
                    />
                </div>
                <div className="col" />
            </div>
        </div>
    </Layout>
)

export default Positions
