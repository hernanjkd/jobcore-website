import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
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





    <div className="bg-lightgray px-10 py-10 m-0 d-flex justify-content-between">

      <div className="pr-5">
        <h1 className="">Get work fast & <span className="text-brightblue">get paid </span>
          the same day</h1>

        <p>JobCore is where events are organized: A talent pool of curated workers and hundreds of companies
          organizing events and hiring everyday.</p>

        <div className="text-center pt-3">
          <input type="text" placeholder="Enter Your Email" />

          <button className="btn radius btn-purple my-2 my-sm-0 ml-2 px-4"
            type="submit">Get Started</button>
        </div>

        <div className="text-center pt-5">
          <a className="pr-2" href="#"><img src={GooglePlay} /></a>
          <a href="#"><img src={AppStore} /></a>
        </div>

      </div>

      <div className="">
        <iframe width="340" height="220" src="https://www.youtube.com/watch?v=0gwvFV9OXuI"></iframe>
      </div>

    </div>





    <div className="py-10 px-10 text-center">

      <h3>Finally a centralized <span className="text-brightblue">source of talents </span>
        and companies!</h3>

      <p className="px-10 pt-3">Sign up, setup your job preferences and start receiving invitations to work as
      Chef, Cook, Bartender, Cleaning Staff or any other role surrounding hospitality.</p>

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





    <div className="bg-lightgray px-10 py-10 m-0 text-center">

      <h2>Finally a job platform for the
        <span className="text-brightblue"> hospitality industry!</span></h2>

      <p>Finding talent and jobs in the hospitality industry has never been easier.<br />
        Sign up today and give it a try!</p>

      <div className="text-center pt-4">
        <input type="text" placeholder="Enter Your Email" />

        <button className="btn radius btn-purple my-2 my-sm-0 ml-2 px-4"
          type="submit">Get Started</button>
      </div>

    </div>




    <div className="py-10 px-20 text-left d-flex justify-content-around align-items-center">

      <div>
        <h2 className="pl-1 pr-4">Employers can manage <span className="text-brightblue">talent</span> and payroll</h2>
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
