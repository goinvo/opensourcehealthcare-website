import React, { Component } from 'react'

class ArticleCard extends Component {
  render (){
    const {
      title,
      author
      link
    } = this.props

    return (
      <div className="article-card">
        <a href={link}>
          <div classname="author">{author}</div>
          <div classname="title">{author}</div>
        </a>
      </div>
    )
  }
}

export default ArticleCard
