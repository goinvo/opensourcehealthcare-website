import React, { Component } from 'react'

class Email extends Component {
  render (){
    const {
      text,
    } = this.props

    return (
      <a href="mailto:juhan@goinvo.com?subject=Message%20from%20Open%20Source%20Healthcare">{text}</a>
    )
  }
}

export default Email
