import React, { Component } from 'react'

import Layout from '../components/layout'
import MyImage from '../components/myImage'
import Columns from '../components/Columns'

import pdf from 'downloads/open-source-healthcare-journal.pdf'

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
            <Columns columns={3}>
              <div className="download-card-container">
                <div className="download-card">
                  <div className="title">Open Source Healthcare</div>
                  <MyImage filename="oshc-journal-home.png" />
                </div>
                <a href={pdf} className="button" target="_blank" rel="noopener noreferrer">Download 25MB PDF</a>
                <a href="http://www.blurb.com/b/8980724-open-source-healthcare-journal" className="button" target="_blank" rel="noopener noreferrer">$12 Blurb book</a>
              </div>

              // <div className="download-card-container">
              //   <div className="download-card">
              //     <div className="title"><span className="text--red">Nine Organizing Principles</span> of Open Source Healthcare</div>
              //     <MyImage filename="oshc-journal-home.png" />
              //   </div>
              //   <a href="" className="button" target="_blank" rel="noopener noreferrer">Download PDF</a>
              // </div>
              //
              // <div className="download-card-container">
              //   <div className="download-card">
              //     <div className="title">Open Source Healthcare Missionette</div>
              //     <MyImage filename="oshc-journal-home.png" />
              //   </div>
              //   <a href="" className="button" target="_blank" rel="noopener noreferrer">Download PDF</a>
              // </div>

            </Columns>

          </div>
        </div>
      </Layout>
    )}
}

export default DownloadPage
