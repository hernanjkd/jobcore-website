import React from "react"
import Layout from "../components/layout"

//assets
import Temp from "../images/positions.png"

const Positions = () => (
    <Layout>

        <div className="container text-center">

            <div className="row">
                <div className="col">
                    <img src={Temp} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={Temp} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={Temp} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={Temp} />
                </div>
            </div>

        </div>

    </Layout>
)

export default Positions
