import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AppStore from "../images/app-store.png"
import GooglePlay from "../images/google-play.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


    <div className="bg-lightgray px-10 py-5 m-0 d-flex justify-content-between">

      <div className="pr-5">
        <h1 className="">Get work fast & <span className="text-brightblue">get paid </span>
          the same day</h1>

        <p>
          JobCore is where events are organized: A talent pool of curated workers and hundreds of companies
          organizing events and hiring everyday.
        </p>

        <div className="text-center pt-3">
          <input type="text" size="30" placeholder="Email" />

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

      {/* </div> */}
    </div>


    <div className="py-5 px-10 text-center">
      <h3>Finally a centralized <span className="text-brightblue">source of talents </span> 
        and companies!</h3>

      <p className="">
        Sign up, setup your job preferences and start receiving invitations to work as Chef, Cook
        , Bartender, Cleaning Staff or any other role surrounding hospitality.
      </p>

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
