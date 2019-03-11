import React from 'react'
import { Link, StaticQuery, graphql  } from 'gatsby'

const DownloadLink = (props) => (
  <StaticQuery
    query={graphql`
      query {
        downloads: allFile(filter: { sourceInstanceName: { eq: "downloads" } }) {
          edges {
            node {
              relativePath
              name
            }
          }
        }
      }
    `}

    render={(data) => {
      const file = data.downloads.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!file) { return null; }

      const downloadPath = file.node.relativePath;

      return (
        <Link to={downloadPath} className="button button--primary" target="_blank" rel="noopener noreferrer">Download</Link>
      );
    }}
  />
)

export default DownloadLink
