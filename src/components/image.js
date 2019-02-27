import React, { Component } from 'react'

class Image extends Component {
  export const squareImage = graphql`
    fragment squareImage on File {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    export const query = graphql`
      query {
        image1: file(relativePath: { eq: "images/oshc-journal-home.png" }) {
          ...squareImage
        }
      }
}

export default Image
