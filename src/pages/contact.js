import React, { Component } from 'react'

import Layout from '../components/layout'

class ContactPage extends Component {

  render() {
    return (
      <Layout>
        <div className="max-width content-padding pad-vertical pad-top--double header-padding">
          <h1>Get in touch</h1>

          <p>Be a part of Open Source Healthcare. Grow the community.</p>
          <p>Looking for collaboration on open source healthcare projects? Have a question or an idea about OS Healthcare, or want to be involved?</p>
          <p>Let's have a chat
            <br/><a href="mailto:hello@opensourcehealthcare.org">hello@opensourcehealthcare.org</a></p>

          

          <p>Let's work together on creating an open source future to drive better healthcare for all.</p>
        </div>
      </Layout>
    )}
}

export default ContactPage
