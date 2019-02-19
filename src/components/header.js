import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-nav">
      <Link to="/mission/">Mission</Link>
      <Link to="/evidence/">Evidence</Link>
    </div>
    <div className="menu">

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
