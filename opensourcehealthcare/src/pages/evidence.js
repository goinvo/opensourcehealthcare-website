import React from "react"
//import { Link } from "gatsby"

import ArticleCard from '../components/articleCard'
//import spotlightItems from '../data/article-spotlight'

import Layout from "../components/layout"

import {
  extractArticleLinkDetails,
  concatCaseStudiesAndFeatures,
} from '../helpers'


class EvidencePage extends Component {
  constructor(props) {
    super(props)

    const workItems = concatArticles(props.data)
    const query =
      props.location && props.location.search ? props.location.search : null

    this.state = {
      spotlightItems,
      articleItems,
      activeWorkItems,
    }
  }

  <Layout>
    <p>Points of view from thought leaders and notable OS projects as evidence for the need for OS in healthcare.</p>

    <div class="article-section">
      <h2 className="header-xl">Spotlight</h2>

      {this.state.spotlightItems.map((spotlightArticle, i) => {
        const {
          title,
          author,
          link,
        } = extractArticleLinkDetails(spotlightArticle)

        return (
          <ArticleCard
            title={spotlightArticle.title}
            author={spotlightArticle.author}
            link={spotlightArticle.link}
          />
        )
      })}

    </div>
  </Layout>
}

export const articleQuery = graphql`
  query ArticleQuery {
    allMdx {
      edges {
        node {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            title
            image
            client
            categories
            caption
          }
        }
      }
    }
  }
`

export default Evidence
