import React, { Component } from 'react'

import MyImage from './myImage'
import Download from './downloads'

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
          <MyImage filename={image} />
        </div>
        <Download downloadPath={link} />
      </div>
    )
  }
}

export default DownloadCard
