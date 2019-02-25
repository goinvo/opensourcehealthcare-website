import { Link } from "gatsby"
import React from "react"

const Footer = ({ children }) => (
  <footer>
    <div className="max-width content-padding pad-vertical pad-top--double">
      <p className="text--center">Who are we?</p>
      <h3 className="text--center margin-bottom--none">We are GoInvo</h3>
      <p className="text--center margin-top--none">GoInvo is a design studio focused on creating an open source future to drive better healthcare for all.</p>
      <p className="text--center"><Link to="https://www.goinvo.com/work/?category=open-source">Our open source projects</Link></p>
      <p className="text--center">
        <Link to="mailto:hello@opensourcehealthcare.org">hello@opensourcehealthcare.org</Link>
        <br />661 Massachusetts Ave, 3rd Floor,
        <br />Arlington, MA 02476
        <br /><a href="tel:+16175043390">617.504.3390</a>
      </p>
    </div>
  </footer>
)

export default Footer
