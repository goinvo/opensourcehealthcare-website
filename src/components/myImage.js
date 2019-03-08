import React, { Component } from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//class MyImage extends Component {
  //render(){

    //return (
    const MyImage = (props) => (
      <StaticQuery
        query={graphql`
          query {
            images: allFile {
              edges {
                node {
                  relativePath
                  name
                  childImageSharp {
                    sizes(maxWidth: 600) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        `}

        render={(data) => {
          const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(props.filename);
          });
          //if (!image) { return null; }

          const imageSizes = image.node.childImageSharp.sizes;
          return (
            <Img
              alt={props.alt}
              sizes={imageSizes}
            />
          );
        }}
      />
    )
  //}
//}

export default MyImage
