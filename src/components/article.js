import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Helmet from 'react-helmet'

import Layout from 'layout'
//import Image from 'image'
//import Hero from './hero'
//import Columns from './columns'
//import Card from './card'
//import ImageBlock from './image-block'
//import References from './references'

import {
  extractArticleDataFromQuery,
  extractArticleLinkDetails,
  //concatArticles,
  findArticleById,
  mediaUrl,
} from '../helpers'

import config from '../../config'

class ArticleLayout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ArticleQuery {
            allMdx {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                    }
                  }
                  code {
                    body
                  }
                  frontmatter {
                    title
                    image
                    author
                    references {
                      title
                      link
                    }
                    upNext
                    metaDescription
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const articleList = concatArticles(
            data,
            false
          )
          const article = findArticleById(data, this.props.pageContext.id)

          const meta = [
            {
              name: 'twitter:site',
              content: '@goinvo',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:title',
              content: article.frontmatter.title,
            },
            {
              name: 'twitter:image',
              content: mediaUrl(article.frontmatter.image),
            },
            {
              property: 'og:title',
              content: article.frontmatter.title,
            },
            {
              property: 'og:image',
              content: mediaUrl(article.frontmatter.image),
            },
          ]
          if (article.frontmatter.metaDescription) {
            meta.push(
              {
                name: 'description',
                content: article.frontmatter.metaDescription,
              },
              {
                name: 'twitter:description',
                content: article.frontmatter.metaDescription,
              },
              {
                property: 'og:description',
                content: article.frontmatter.metaDescription,
              }
            )
          }

          return (
            <Layout>
              <Helmet
                title={`${article.frontmatter.title} - GoInvo`}
                meta={meta}
              />
              <MDXProvider
                components={{
                  h1: ({ children, ...props }) => (
                    <h1
                      //className="header--xl margin-top--double margin-bottom--half"
                      {...props}
                    >
                      {children}
                    </h1>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2
                      //className="header--md margin-top--double"
                      {...props}
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3
                      //className="header--sm margin-bottom--half"
                      {...props}
                    >
                      {children}
                    </h3>
                  ),
                  p: ({ children, ...props }) => (
                    <p className="margin-bottom--double">
                      {children}
                    </p>
                  ),
                  ul: ({ children, ...props }) => (
                    <ul className="ul margin-top--none margin-bottom--double">
                      {children}
                    </ul>
                  ),
                  img: props => (
                    <Image
                      className="image--max-width"
                      sizes={config.sizes.fullInsideMediumMaxWidth}
                      {...props}
                    />
                  ),
                }}
              >
                <div className="article">
                  <Hero image={article.frontmatter.image} />
                  <div className="max-width max-width--md content-padding">
                    <MDXRenderer>{article.code.body}</MDXRenderer>
                  </div>
                  <div className="background--gray-light pad-vertical--double pad-bottom--quad">
                    <div className="max-width content-padding">
                      <h2>Up next</h2>

                        {article.frontmatter.upNext.map(id => {
                          const nextItem = articleList.find(
                            item => item.slug === id || item.id === id
                          )
                          const {
                            link,
                            externalLink,
                            suppressNewTab,
                          } = extractArticleLinkDetails(nextItem)

                        })}
                    </div>
                  </div>
                  {article.frontmatter.references ? (
                    <div className="background--gray pad-vertical">
                      <div className="max-width content-padding">
                        <References
                          references={article.frontmatter.references}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </MDXProvider>
            </Layout>
          )
        }}
      />
    )
  }
}

export default ArticleLayout
