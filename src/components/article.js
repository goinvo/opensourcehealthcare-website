import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Helmet from 'react-helmet'

import Layout from './layout'
//import Hero from './hero'
//import Columns from './columns'
//import ArticleCard from './articleCard'
//import References from './references'

import {
  findArticleById,
} from '../helpers'


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
                    author
                    hero
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
          const article = findArticleById(data, this.props.pageContext.id)

          return (
            <Layout>
              <Helmet
                title={`${article.frontmatter.title} - ${article.frontmatter.author}`}
                //meta={meta}
              />
              <MDXProvider
                components={{
                  h1: ({ children, ...props }) => (
                    <h1
                      className="header--xl"
                      {...props}
                    >
                      {children}
                    </h1>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2
                      className="header--xl"
                      {...props}
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3 className="header--sm" {...props}>
                      {children}
                    </h3>
                  ),
                  h4: ({ children, ...props }) => (
                    <h4 className="header--sm" {...props}>
                      {children}
                    </h4>
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
                }}
              >
                <div className="article">
                  <div className="article-hero-container header-padding">
                    <div className="article-hero"></div>
                  </div>

                  <div className="max-width content-padding pad-vertical">
                    <h1 className="article-author">{article.frontmatter.author}</h1>
                    <h2 className="article-title header-xl">{article.frontmatter.title}</h2>
                    <div className="article-content">
                      <MDXRenderer>
                        {article.code.body}
                      </MDXRenderer>
                    </div>
                  </div>
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
