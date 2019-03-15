import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ children }) => (
  <footer>
    <div className="max-width content-padding pad-vertical">
      <div className="top-left">
        <p>Who are we?</p>
        <h3 className="margin-bottom--none">We are GoInvo</h3>
        <p className="margin-top--none">GoInvo is a design studio focused on creating an open source future to drive better healthcare for all.</p>
        <p><a href="https://www.goinvo.com/work/?category=open-source" rel="noopener noreferrer" target="_blank">Our open source projects</a></p>
      </div>
      <div className="bottom-right">
        <p>
          <a href="mailto:hello@opensourcehealthcare.org">hello@opensourcehealthcare.org</a>
          <br />661 Massachusetts Ave, 3rd Floor,
          <br />Arlington, MA 02476
          <br /><a href="tel:+16175043390">617.504.3390</a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
