import React, { Component } from 'react'

import Layout from '../components/layout'
import MyImage from '../components/myImage'

import pdf from 'downloads/open-source-healthcare-journal.pdf'

class DownloadPage extends Component {

  render() {
    return (
      <Layout>
        <div className="max-width content-padding pad-vertical pad-top--double header-padding">
          <h1 className="text--center mobile-squish-sm"><span className="text--red">Open sharing</span> benefits all</h1>

          <p className="text--center">Own the OS handbook,
            <br/>Write your own OS principles,
            <br/>Share your OS points of view to public.</p>

          <div className="downloads-section">
            <div className="columns__item columns__item--3">
              <div className="download-card-container">
                <div className="download-card">
                  <div className="title">Open Source Healthcare</div>
                  <MyImage filename="open-source-dark.jpg" />
                </div>

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

            </div>

          </div>
        </div>
      </Layout>
    )}
}

export default DownloadPage
