import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div class="top">
      <h1>We demand open source healthcare</h1>
      <h1>We must set healthcare free</h1>
    </div>

    <div class="mission">
      <h4>Open Source (OS) Software is</h4>
      <p></p>
    </div>

    <Link to="/page-2/">Go to page 2</Link>

  </Layout>
)

export default IndexPage
