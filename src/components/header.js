import React, { Component } from 'react'
import { Link } from "gatsby"

class Header extends Component {

  render() {
    const navItems = [
      { link: '/', title: 'Home', class: 'hidden--until-lg' },
      { link: '/mission/', title: 'Mission' },
      { link: '/evidence/', title: 'Evidence' },
      { link: '/take-action/', title: 'Take action', class: 'hidden--until-lg' },
      { link: '/contact/', title: 'Get in touch', class: 'hidden--until-lg' },
      { link: '/download/', title: 'Download PDF', class: 'hidden--until-lg' },
    ]

    return (
      <header>
        <div className="header-nav">
          {navItems.map(navItem => {
            return (
              <Link
                key={navItem.link}
                to={navItem.link}
                className={`header-nav__link ${navItem.class}`}
                activeClassName="header-nav__link--active"
              >
                {navItem.title}
              </Link>
            )
          })}
        </div>
        <button className="menu-toggle"></button>

      </header>
    )
  }
}

export default Header
