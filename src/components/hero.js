import React, { Component } from 'react'
import MyImage from './myImage'

class Hero extends Component {
  render (){
    const {
      hero
    } = this.props

    return (
      <div className="hero-image">
        <MyImage filename={hero} />
      </div>
    )
  }
}

export default Hero
