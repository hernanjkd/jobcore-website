import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PositionCard from '../components/position-card'

const data = [
    {
        location: 'Miami Beach',
        amount: '$11.53 - $12.03',
        position: 'Bartenders',
        description: `Lorem ipsum dolor sit amet consect adipisicing elit. Volupta
enim delec saepe cumque totam dolor aut reprehenderit optio
itaque magni.`,
        type: 'Freelance',
        expiration: 'Ends in 3 Days 21h 24m 36s',
    },
    {
        location: 'Coral Gables',
        amount: '$11.53 - $12.03',
        position: 'Servers',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore laborum aperiam officiis eos in esse saepe iusto nam.`,
        type: 'Part Time',
        expiration: 'Ends in 3 Days 21h 24m 36s',
    },
    {
        location: 'Key Biscayne',
        amount: '$11.53 - $12.03',
        position: 'Maids',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nostrum eum consequuntur fuga sit nihil enim tempora ex.`,
        type: 'Full Time',
        expiration: 'Ends in 3 Days 21h 24m 36s',
    }
];

const rows = [1, 2, 3, 4];

const Positions = () => (
    <Layout>
        <SEO title="Positions" />
        <div className="gray-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1>
                    Every Job In
                        <span className="text-brightblue"> One Place</span>
                </h1>
                <h4>
                    Your <span className="text-brightblue">Dream Job</span>{' '}
                    Just A Click Away!
                </h4>
                <div>Want to find a job? We have 263</div>

                <div className="input-group py-5 px-10 w-100">
                    <input
                        type="text"
                        className="form-control border-0 rounded-0 w-50"
                        placeholder="Keywords"
                        size="20"
                    />
                    <select class="custom-select border-top-0 border-bottom-0 border-right-0 w-25">
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

        <div className="container-fluid text-center my-5 py-5">
            {rows.map((e, i) => {
                return (
                    <div className="row my-2" key={i}>
                        <div className="col s1000-hide" />
                        {data.map((e, i) => {
                            let hide = i === 2 ? "s900-hide" : "";
                            return (
                                <div className={"col my-2 s1000-collapse-margin " + hide}
                                    key={i}>
                                    <PositionCard data={e} />
                                </div>
                            )
                        })}
                        <div className="col s1000-hide" />
                    </div>
                )
            }
            )}
        </div>
    </Layout>
)

export default Positions
