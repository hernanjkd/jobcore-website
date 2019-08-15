import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Player from "../components/Player"

//assets
import AppStore from "../images/app-store.png"
import GooglePlay from "../images/google-play.png"
import Clock from "../images/clock.png"
import Magnify from "../images/magnifying-glass.png"
import Suitcase from "../images/suitcase.png"
import Calendar from "../images/calendar.png"
import Money from "../images/money.png"
import Envelope from "../images/envelope.png"
import Screenshot from "../images/cell-screenshot.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />






    <div className="bg-lightgray py-10 m-0">
        <div className="container">
            <div className="row">
                <div className="col-6 text-left" >
                    <h1 className="">Get work fast & <span className="text-brightblue">get paid </span>
                    the same day</h1>

                    <p>JobCore is where events are organized: A talent pool of curated workers and hundreds of companies
                    organizing events and hiring everyday.</p>

                    <div className="text-center pt-3">
                    <input type="text" placeholder="Enter Your Email" />

                    <button className="btn radius btn-purple my-2 ml-2 px-4 py-2"
                        type="submit">Get Started</button>
                    </div>

                    <div className="text-center pt-5">
                    <a className="pr-2" href="#"><img src={GooglePlay} /></a>
                    <a href="#"><img src={AppStore} /></a>
                    </div>

                </div>

                <div className="col-6">
                    <Player video="0gwvFV9OXuI" height={"300px"} style={{backgroundColor: "#dcdbdb"}} />
                </div>
            </div>
        </div>
    </div>






    <div className="py-10 px-10 text-center">
        <div className="container">
            <h3>Finally a centralized <span className="text-brightblue">source of talents </span>
                and companies!</h3>

            <p className="pt-3">Sign up, setup your job preferences and start
            receiving invitations to work as Chef, Cook, <br />Bartender, Cleaning Staff or any other
            role surrounding hospitality.</p>

            <div className="pt-5 d-flex justify-content-between align-items-end">
                <div className="w-250px">
                <img src={Suitcase} />
                <h6 className="pt-3">Publish Shifts</h6>
                <p>Setup your job and preferences in a custom calendar.</p>
                </div>
                <div className="w-250px">
                <img src={Magnify} />
                <h6 className="pt-2">Find Talent</h6>
                <p>Access a talent pool of people in Miami, rated with experience.</p>
                </div>
                <div className="w-250px">
                <img src={Calendar} />
                <h6 className="pt-3">Manage Schedule</h6>
                <p>Automatically send employees job location and shift times.</p>
                </div>
            </div>

            <div className="pt-5 d-flex justify-content-between align-items-end">
                <div className="w-250px">
                <img src={Clock} />
                <h6 className="pt-1">Clock In-Out</h6>
                <p>Track employee performance with GPS located clock in-out features.</p>
                </div>
                <div className="w-250px">
                <img src={Money} />
                <h6 className="pt-2">Payroll Reports</h6>
                <p>Instant payroll reports based on employee activity.</p>
                </div>
                <div className="w-250px">
                <img src={Envelope} />
                <h6 className="pt-2">Direct Payments</h6>
                <p>Direct ACH payments to employee bank accounts.</p>
                </div>
            </div>
        </div>
    </div>






    <div className="bg-lightgray px-10 py-10 m-0 text-center">

      <h2>Finally a job platform for the
        <span className="text-brightblue"> hospitality industry!</span></h2>

      <p>Finding talent and jobs in the hospitality industry has never been easier.<br />
        Sign up today and give it a try!</p>

      <div className="text-center pt-4">
        <input type="text" placeholder="Enter Your Email" />

        <button className="btn radius btn-purple my-2 ml-2 px-4 py-2"
          type="submit">Get Started</button>
      </div>

    </div>






    <div className="py-10 px-15 text-left d-flex justify-content-around align-items-center">

      <div>
        <h2 className="pl-4">Employers can manage<br />
          <span className="text-brightblue"> talent</span> & payroll</h2>
        <ul className="purple-checkmark text-left pt-3">
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





    <div className="bg-lightgray px-10 py-10 m-0 text-center">
      <h2>It's never been easier to <span className="text-brightblue">
        find jobs and hire</span> in the hospitality industry.</h2>

      <p>Sign up today and experience the difference. It's fast and easy!</p>

      <button className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3"
            type="submit">Get Started</button>
    </div>



    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
