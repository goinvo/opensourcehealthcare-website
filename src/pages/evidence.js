import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import ArticleCard from '../components/articleCard'
import spotlightItems from '../data/article-spotlight-order'
import goinvoItems from '../data/article-general-order'

class EvidencePage extends Component {

  render() {
    return (
      <Layout>
        <div className="max-width content-padding pad-vertical pad-top--double header-padding">
          <p>Points of view from thought leaders and notable OS projects as evidence for the need for OS in healthcare.</p>

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

          <div className="article-section">
            <h2 className="header-xl">Articles</h2>
            {goinvoItems.map((goinvoArticle, i) => {
              return (
                <ArticleCard
                  link={goinvoArticle.link}
                  author={goinvoArticle.author}
                  title={goinvoArticle.title}>
                </ArticleCard>
              )
            })}
          </div>

          <div className="download-section">
            <h2 className="header-xl text--center">Get your Open Source Healthcare journal here</h2>
            <div className="button-container"><Link to="/contact/" className="button button--primary">Download 25MB PDF</Link></div>
            <div className="button-container"><Link to="/contact/" className="button">Buy $12 Blurb book</Link></div>
          </div>

          <div className="link-section link-section--evidence">
            <h2 className="header-xl text--center">Work with us towards the open source future.</h2>
            <div className="button-container"><Link to="/contact/" className="button">Get in touch</Link></div>
          </div>

        </div>
      </Layout>
    )}
}

export const evidencePageQuery = graphql`
  query EvidenceQuery {
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

export default EvidencePage
