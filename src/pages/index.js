import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
      <div className="hero-container"><div className="hero hero--fixed hero--home"></div></div>

      <div class="top background--white-gradient-linear">
        <div className="max-width content-padding pad-vertical">
          <h1 className="text--center mobile-squish-sm">We demand <span className="text--red">open source</span> healthcare</h1>
          <h2 className="text--center mobile-squish-sm header-xl">We must set healthcare free</h2>
          <p className="text--center"><Link to="/downloads/open-source-healthcare-journal.pdf" target="_blank" rel="noopener">Check out the Open Source Healthcare journal</Link></p>
        </div>
      </div>

      <div className="background--dark-gradient-linear">
        <div class="mission">
          <div className="max-width content-padding pad-vertical pad-top--double header-padding">
            <h4>Open Source (OS) Software is</h4>
            <p>something that anyone can change and share, because it's publicly available under a generous license. While it first began with computer code, open source now influences how projects and businesses work, and our lives benefit from this open sharing. Open source has grown into a way of participating with many others that asks for transparency, community-based collaboration, and meritocracy. The best ideas float to the top, and you earn trust by what you do and how you amplify the group.</p>
            <p>Our internet is infused with open source ideas and services &mdash; from how cell phones communicate, to how e-mail is directed from one person to the next, to Linux. All of these technologies working together are the operating system of the internet.</p>
            <p>Here in the US, healthcare is
              <br />sometimes amazing,
              <br />often lifesaving,
              <br />always expensive,
              <br />and mostly closed.</p>
            <p>It's tribal at its core &mdash; each hospital, each doc, each healthcare system invents its own way &mdash;to the detriment of our collective health.</p>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
