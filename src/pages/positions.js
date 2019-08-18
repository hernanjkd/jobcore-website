import React from 'react'
import Layout from '../components/layout'

//assets
import Temp from '../images/positions.png'

const Positions = () => (
    <Layout>
        <div className="positions-top-image text-light text-center py-10">
            <h1>
                <strong>
                    Every Job In
                    <span className="text-brightblue"> One Place</span>
                </strong>
            </h1>
            <h4>
                <strong>
                    Your <span className="text-brightblue">Dream Job</span> Just
                    A Click Away!
                </strong>
            </h4>
            <div>Want to find a job? We have 263</div>
        </div>

        <div className="position-search">
            <i class="fas fa-map-marker-alt fa-xs text-purple"></i>
            <span className="text-muted font-small">Miami Beach</span>
            <i class="far fa-calendar-check fa-xs text-purple"></i>
            <span className="text-muted font-small">
                $11.53 - $12.03 / Hour
            </span>
        </div>

        <div className="container text-center">
            <div className="row">
                <div className="col m-3 mt-5">
                    <img src={Temp} />
                </div>
            </div>
            <div className="row">
                <div className="col m-3">
                    <img src={Temp} />
                </div>
            </div>
            <div className="row">
                <div className="col m-3">
                    <img src={Temp} />
                </div>
            </div>
            <div className="row">
                <div className="col m-3 mb-5">
                    <img src={Temp} />
                </div>
            </div>
        </div>
    </Layout>
)

export default Positions
