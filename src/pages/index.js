import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="bg-light px-10 py-5 m-0 d-flex justify-content-between">
      
        <div className="">
          <h2 className="">Get work fast & get paid the same day</h2>

          <p>
            JobCore is where events are organized: A talent pool of curated workers and hundreds of companies
            organizing events and hiring everyday.
        </p>
        </div>

        <div className="">
          <iframe width="340" height="220" src="https://www.youtube.com/watch?v=0gwvFV9OXuI"></iframe>
        </div>

      {/* </div> */}
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
