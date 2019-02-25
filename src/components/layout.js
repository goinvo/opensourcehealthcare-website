import React, { Component} from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'

import Header from "./header"
import Footer from "./footer"

import { mediaUrl } from '../helpers'

class Layout extends Component {
  render() {
    const frontmatter = Object.assign(
      {
        metaTitle: 'Open Source Healthcare Journal',
        metaDescription: 'The Open Source Healthcare Journal is a publication advocating innovative open source ideas to change healthcare for the better.',
        heroImage: '/images/homepage/oshc-hero.jpg',
      },
      this.props.frontmatter
    )

    return (
      <div className="app">
        <Helmet
          title={frontmatter.metaTitle}
          meta={[
            {
              name: 'description',
              content: frontmatter.metaDescription,
            },
            {
              name: 'twitter:site',
              content: '@goinvo',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:image',
              content: mediaUrl(frontmatter.heroImage),
            },
            {
              name: 'twitter:title',
              content: frontmatter.metaTitle,
            },
            {
              name: 'twitter:description',
              content: frontmatter.metaDescription,
            },
            {
              property: 'og:image',
              content: mediaUrl(frontmatter.heroImage),
            },
            {
              property: 'og:title',
              content: frontmatter.metaTitle,
            },
            {
              property: 'og:description',
              content: frontmatter.metaDescription,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="app__body">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
