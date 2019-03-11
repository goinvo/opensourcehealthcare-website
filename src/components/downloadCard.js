import React, { Component } from 'react'

import MyImage from './myImage'
import DownloadLink from './downloadLink'

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
        <DownloadLink filename={link} file={link} />
      </div>
    )
  }
}

export default DownloadCard
