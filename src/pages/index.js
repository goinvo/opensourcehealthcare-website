import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import ArticleCard from '../components/articleCard'
import spotlightItems from '../data/article-spotlight-order'

const IndexPage = () => (
  <Layout>
    <div className="hero-container hero-container--home">
      <div className="hero hero--fixed hero--home">
        <div className="max-width content-padding pad-vertical header-padding">
          <div className="header-container">
            <h1 className="text--center mobile-squish-sm">We demand <span className="text--red"> open source </span> healthcare</h1>
            <h2 className="text--center mobile-squish-sm header-xl">We must set healthcare free</h2>
          </div>
          <p className="text--center"><Link to="/downloads/open-source-healthcare-journal.pdf" target="_blank" rel="noopener">Check out the Open Source Healthcare journal</Link></p>
        </div>
      </div>
    </div>

    <div className="background--dark-gradient-linear-transparent">
      <div className="max-width content-padding pad-vertical pad-top--double header-padding">
        <div className="mission-home text--white">
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

    <div className="max-width content-padding pad-vertical">
      <div className="reasons">
        <div className="reason">
          <p>We have open standards for finance,</p>
          <p>because we value our money more than our health.</p>
        </div>
        <div className="reason">
          <p>We have open standards for finance</p>
          <p>because getting to the destination is a necessity.</p>
        </div>
        <div className="reason">
          <p>We have open standards for finance</p>
          <p>because <strong>our lives depend on it</strong>.</p>
        </div>
      </div>
    </div>

    <div className="max-width content-padding pad-vertical">
      <h3>Healthcare is too important to be closed.</h3>
      <p>Our healthcare services need to be open. We are working towards an open source future to drive better healthcare for all.</p>
      <div class="button-container"><Link to="/mission/" className="button button--primary">See our mission</Link></div>
    </div>

    <div className="max-width content-padding pad-vertical">
      <div className="article-section">
        <h2 className="header-xl">Spotlight</h2>
        {spotlightItems.map((spotlightArticle, i) => {
          return (
            <ArticleCard
              link={spotlightArticle.link}
              author={spotlightArticle.author}
              title={spotlightArticle.title}>
            </ArticleCard>
          )
        })}
      </div>
    </div>

    <div className="max-width content-padding pad-vertical">
      <div className="editors">
        <h3>Editors</h3>
        <h3 class="text--red">Open EHRs Are Going Global</h3>
        <p>Creating,</p>
      </div>
    </div>

  </Layout>
)

export const indexPageQuery = graphql`
  query IndexQuery {
    allMdx {
      edges {
        node {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            author
            title
          }
        }
      }
    }
  }
`

export default IndexPage
