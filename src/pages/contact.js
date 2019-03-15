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

          <form className="form contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <div className="field">
              <label>Your name</label>
              <input type="text" name="name" />
            </div>
            <div className="field">
              <label>Your email</label>
              <input type="email" name="email" />
            </div>
            <div className="field">
              <label>Your role</label>
              <input type="text" name="role" />
            </div>
            <div className="field">
              <label>How can we help?</label>
              <textarea name="message"></textarea>
            </div>
            <div className="button-container">
              <button className="button" type="submit">Send message</button>
            </div>
          </form>

          <p>Let's work together on creating an open source future to drive better healthcare for all.</p>
        </div>
      </Layout>
    )}
}

export default ContactPage
