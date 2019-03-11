import React, { Component } from 'react'
import { Link } from 'gatsby'

import Logo from '../assets/images/logo.inline.svg'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileNavOpen: false,
    }
  }

  toggleMobileNav = () => {
    document.body.classList.toggle('has-overlay')
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
  }

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
        <div class="header-wrapper">
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
          <Link to="/" className="menu-toggle hidden--until-lg"><Logo /></Link>
          <button className={`menu-toggle hidden--lg ${
              this.state.mobileNavOpen ? 'menu-toggle--open' : ' '
            }`} onClick={this.toggleMobileNav}><Logo /></button>
          <div className={`mobile-overlay ${
              this.state.mobileNavOpen ? 'mobile-overlay--open' : ' '
            }`}>
            <div className="mobile-nav">
              <ul className="mobile-nav__list">
                {navItems.map(navItem => {
                  return (
                    <li key={navItem.link}>
                      <Link
                        to={navItem.link}
                        className={`mobile-nav__link`}
                        activeClassName="mobile-nav__link--active"
                        onClick={this.toggleMobileNav}
                      >
                        {navItem.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="contact-link">
                <Link to="mailto:hello@opensourcehealthcare.org">hello@opensourcehealthcare.org</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
