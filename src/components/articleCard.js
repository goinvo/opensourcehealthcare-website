import React, { Component } from 'react'
import { Link } from 'gatsby'

class ArticleCard extends Component {
  render (){
    const {
      title,
      author,
      link,
    } = this.props

    return (
      <div className="article-card">
        <Link to={link}>
          <div classname="author">{author}</div>
          <div classname="title">{title}</div>
        </Link>
      </div>
    )
  }
}

export default ArticleCard
