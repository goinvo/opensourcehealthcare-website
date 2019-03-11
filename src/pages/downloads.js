import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'
import DownloadCard from '../components/downloadCard'
import downloadItems from '../data/downloads-order.json'

class DownloadPage extends Component {

  render() {
    return (
      <Layout>
        <div className="max-width content-padding pad-vertical pad-top--double header-padding">
          <h1><span className="text--red">Open sharing</span> benefits all</h1>

          <p>Own the OS handbook,
            <br/>Write your own OS principles,
            <br/>Share your OS points of view to public.</p>

          <div className="downloads-section">
            {downloadItems.map((download, i) => {
              return (
                <DownloadCard
                  title={download.title}
                  image={download.image}
                  link={download.link}
                  linkText={download.linkText} >
                </DownloadCard>
              )
            })}
          </div>
          <Link to={withPrefix('downloads/open-source-healthcare-journal.pdf')} className="button button--primary" target="_blank" rel="noopener noreferrer">Download 25MB PDF</Link>
          <Link to='http://www.blurb.com/b/8980724-open-source-healthcare-journal' className="button" target="_blank" rel="noopener noreferrer">Buy $12 Blurb book</Link>

        </div>
      </Layout>
    )}
}

export default DownloadPage
