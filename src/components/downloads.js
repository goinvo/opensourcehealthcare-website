import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Download = (props) => (
  <StaticQuery
    query={graphql`
      query {
        downloads: allFile {
          edges {
            node {
              relativePath
            }
          }
        }
      }
    `}

    render={(data) => {
      const file = data.downloads.edges.find(n => {
        return n.node.relativePath.includes(props.downloadPath);
      });
      if (!file) { return null; }

      const downloadPath = file.node.relativePath;
      return (
        <Link to={downloadPath} className="button button--primary" target="blank" rel="noopener noreferrer">Download</Link>
      );
    }}
  />
)

export default Download
