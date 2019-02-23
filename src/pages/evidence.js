import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
//import ArticleCard from '../components/articleCard'
import spotlightItems from '../data/article-spotlight-order'
import goinvoItems from '../data/article-general-order'

import {
  extractArticleLinkDetails,
  //concatArticles,
} from '../helpers'

class EvidencePage extends Component {

  render() {
    return (
      <Layout>
        <p>Points of view from thought leaders and notable OS projects as evidence for the need for OS in healthcare.</p>

        <div className="article-section">
          <h2 className="header-xl">Spotlight</h2>

          {spotlightItems.map((spotlightArticle, i) => {
            const {
              link,
            } = extractArticleLinkDetails(spotlightArticle)

            return (
              <div className="article-card" >
                <Link to={link}>
                  <div className="author">{spotlightArticle.author}</div>
                  <div className="title">{spotlightArticle.title}</div>
                </Link>
              </div>

            )
          })}

        </div>

        <div className="article-section">
          <h2 className="header-xl">Articles</h2>
          {goinvoItems.map((goinvoArticle, i) => {
            const {
              link,
            } = extractArticleLinkDetails(goinvoArticle)

            return (
              <div className="article-card" >
                <Link to={link}>
                  <div className="author">{goinvoArticle.author}</div>
                  <div className="title">{goinvoArticle.title}</div>
                </Link>
              </div>

            )
          })}
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
