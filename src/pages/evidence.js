import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import ArticleCard from '../components/articleCard'
import spotlightItems from '../data/article-spotlight-order'
import goinvoItems from '../data/article-general-order'

import pdf from 'downloads/open-source-healthcare-journal.pdf'

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
            <div className="button-container">
              <div className="button-mask button-mask--primary">
                <span className="mask"><a href={pdf} target="_blank" rel="noopener noreferrer">Download 25MB PDF</a></span>
                <button type="button" name="Hover"><a href={pdf} target="_blank" rel="noopener noreferrer">Download 25MB PDF</a></button>
              </div>
              <div className="button-mask">
                <span className="mask"><a href="http://www.blurb.com/b/8980724-open-source-healthcare-journal" target="_blank" rel="noopener noreferrer">$12 Blurb book</a></span>
                <button type="button" name="Hover"><a href="http://www.blurb.com/b/8980724-open-source-healthcare-journal" target="_blank" rel="noopener noreferrer">$12 Blurb book</a></button>
              </div>
            </div>
          </div>

          <div className="link-section link-section--evidence">
            <h2 className="header-xl text--center">Work with us towards the open source future.</h2>
            <div className="button-container">
              <div class="button-mask">
                <span class="mask"><Link to="/contact/">Get in touch</Link></span>
                <button type="button" name="Hover"><Link to="/contact/">Get in touch</Link></button>
              </div>
            </div>
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
