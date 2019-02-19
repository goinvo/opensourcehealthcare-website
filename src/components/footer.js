import { Link } from "gatsby"
import React from "react"

const Footer = ({ children }) => (
  <footer>
    © {new Date().getFullYear()}, Built by
    {` `}
    <Link to="https://goinvo.com">GoInvo</Link>
  </footer>
)

export default Footer
