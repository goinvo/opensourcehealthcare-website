import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>

      <div className="background--dark-gradient">
        <div className="max-width content-padding pad-vertical pad-top--double header-padding">
        <div class="top">
          <h1 className="text--center mobile-squish">We demand <span className="text--red">open source</span> healthcare</h1>
          <h2 className="text--center mobile-squish header-xl">We must set healthcare free</h2>
          <Link to="/page-2/">Check out the Open Source Healthcare journal</Link>
        </div>

        <div class="mission">
          <h4>Open Source (OS) Software is</h4>
          <p>something that anyone can change and share, because it’s publicly available under a generous license. While it first began with computer code, open source now influences how projects and businesses work, and our lives benefit from this open sharing. Open source has grown into a way of participating with many others that asks for transparency, community-based collaboration, and meritocracy. The best ideas float to the top, and you earn trust by what you do and how you amplify the group.</p>
          <p>Our internet is infused with open source ideas and services &mdash; from how cell phones communicate, to how e-mail is directed from one person to the next, to Linux. All of these technologies working together are the operating system of the internet.</p>
          <p>Here in the US, healthcare is
            <br />sometimes amazing,
            <br />often lifesaving,
            <br />always expensive,
            <br />and mostly closed.</p>
          <p>It's tribal at its core &mdash; each hospital, each doc, each healthcare system invents its own way &mdash;to the detriment of our collective health.</p>
        </div>
      </div>

      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
