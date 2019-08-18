import React from "react"

import Layout from "../components/layout"
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
import Platform from "../images/platform-glance.png"
import Reviews from "../images/reviews.png"

/* eslint-disable */

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

            <div className="pt-3 d-flex align-items-center justify-content-center">
              <input type="text" className="form-control d-inline" placeholder="Enter Your Email" />

              <button className="btn radius btn-purple my-2 ml-2 px-4 py-2 d-inline"
                type="submit">Get Started</button>
            </div>

            <div className="text-center pt-5">
              <a className="mr-2" href="#"><img src={GooglePlay} /></a>
              <a href="#"><img src={AppStore} /></a>
            </div>

          </div>

          <div className="col-6">
            <Player video="0gwvFV9OXuI" height={"300px"} style={{ backgroundColor: "#dcdbdb" }} />
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

        <div className="mt-5 d-flex justify-content-between align-items-end">
          <div className="w-250px">
            <img src={Suitcase} />
            <h6 className="mt-3">Publish Shifts</h6>
            <p>Setup your job and preferences in a custom calendar.</p>
          </div>
          <div className="w-250px">
            <img src={Magnify} />
            <h6 className="mt-2">Find Talent</h6>
            <p>Access a talent pool of people in Miami, rated with experience.</p>
          </div>
          <div className="w-250px">
            <img src={Calendar} />
            <h6 className="mt-3">Manage Schedule</h6>
            <p>Automatically send employees job location and shift times.</p>
          </div>
        </div>

        <div className="mt-5 d-flex justify-content-between align-items-end">
          <div className="w-250px">
            <img src={Clock} />
            <h6 className="mt-1">Clock In-Out</h6>
            <p>Track employee performance with GPS located clock in-out features.</p>
          </div>
          <div className="w-250px">
            <img src={Money} />
            <h6 className="mt-2">Payroll Reports</h6>
            <p>Instant payroll reports based on employee activity.</p>
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

      <h3 className="mb-2">Finally a job platform for the
        <span className="text-brightblue"> hospitality industry!</span></h3>

      <p>Finding talent and jobs in the hospitality industry has never been easier.<br />
        Sign up today and give it a try!</p>

      <div className="mt-4 d-flex align-items-center justify-content-center">
        <input type="text" className="form-control" placeholder="Enter Your Email" />

        <button className="btn radius btn-purple my-2 ml-2 px-4 py-2"
          type="submit">Get Started</button>
      </div>

    </div>






    <div className="py-10 px-15 text-left d-flex justify-content-around align-items-center">

      <div>
        <h3 className="ml-4">Employers can manage<br />
          <span className="text-brightblue"> talent</span> & payroll</h3>
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

      <h3 className="mb-1">It's never been easier to <span className="text-brightblue">
        find jobs and hire</span> in the hospitality industry.</h3>

      <p>Sign up today and experience the difference. It's fast and easy!</p>

      <button className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3"
        type="submit">Get Started</button>

    </div>






    <div className="py-10 px-10 text-left text-center">

      <h3 className="mb-2">The <span className="text-brightblue">platform</span> at a glance</h3>

      <p>JobCore provides an easy to use end-to-end experience for employers and job seekers
        <br />in the hospitality industry on mobile and desktop.</p>

      <img className="my-4 mx-auto" src={Platform} />

      <h3 className="my-4">What our <span className="text-brightblue">customers
        </span> are saying about us</h3>

      <img className="mb-5" src={Reviews} />

      <h3 className="pt-5 mt-3">It's never been easier <span className="text-brightblue">find jobs and hire
      </span> in the hospitality industry.</h3>

      <p className="mb-4">Sign up today and experience the difference. It's fast and easy!</p>

      <div className="d-flex align-items-center justify-content-center">
        <input type="text" className="form-control" placeholder="Enter Your Email" />

        <button className="btn radius btn-purple my-2 ml-2 px-4 py-2"
          type="submit">Get Started</button>
      </div>
    </div>






  </Layout>
)

export default IndexPage
