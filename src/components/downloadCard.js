import React, { Component } from 'react'
import { Link } from 'gatsby'

import MyImage from './myImage'

class DownloadCard extends Component {
  render (){
    const {
      title,
      image,
      link,
      linkText,
    } = this.props

    return (
      <div className="download-card-container">
        <div className="download-card">
          <div className="title">{title}</div>
          <MyImage filename="oshc-journal-home.png" />
        </div>
        <Link to={link} className="button button--primary">{linkText}</Link>
      </div>
    )
  }
}

export default DownloadCard
