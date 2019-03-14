import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'

const Mission = () => (
  <Layout>
    <div className="hero-container">
      <div className="hero hero--fixed hero--action"><Hero hero="supporting-patients-2.jpg" /></div>
    </div>

    <div className="max-width content-padding pad-vertical header-padding">
      <div className="header-container header-container--mission">
        <h1 className="text--center mobile-squish-md">We live in a closed healthcare system</h1>
        <p className="text--center mobile-squish-md">We demand that our healthcare services be open.</p>
      </div>
    </div>

    <div className="content principles">
      <div className="max-width content-padding pad-vertical">
        <h1 className="header-xl"><span className="text--red">Nine organizing principles</span> of open source healthcare</h1>
        <p>A framework for responsible use and management of patient health data and information for the advancement of health quality, health research, and data ownership.</p>

        <div className="principle" id="principle-1">
          <div className="principle-number">1</div>
          <h3>Simple National Standard</h3>
          <p>Establish, maintain, and evolve a single, national target for health data standardization. This common data element definition for human health will be available under a business-friendly, open source license (such as Apache). It’s open to any interested party, organization, or individual both domestic and international.
            <ul>
              <li>Contributors will be vetted by the model stakeholders.</li>
              <li>No single party may have exclusive rights to the schema.</li>
              <li>Major changes to the standard must involve an open decision-making process and a consensus between all stakeholders.</li>
              <li>The standards must be managed by an official, elected organizing body for a term of 4 years (with a term limit of 8 years).</li>
            </ul>
          </p>
        </div>

        <div className="principle" id="principle-2">
          <div className="principle-number">2</div>
          <h3>Cost Transparency</h3>
          <p>Prices for healthcare services, from medical treatments to insurance costs, are publicly known and posted. Cost transparency promotes patient choice.</p>
        </div>

        <div className="principle" id="principle-3">
          <div className="principle-number">3</div>
          <h3>Responsible Use</h3>
          <p>Criminalize the unethical and wrongful use of personal healthcare data.</p>
        </div>

        <div className="principle"S id="principle-4">
          <div className="principle-number">4</div>
          <h3>Data Usage Transparency</h3>
          <p>Every update or change to a patient's healthcare record requires a healthcare receipt. After an encounter, a receipt detailing the conversation and collected information is sent to the patient and corresponding care team.</p>
        </div>

        <div className="principle" id="principle-5">
          <div className="principle-number">5</div>
          <h3>Transactional Care</h3>
          <p>Patients have the rights to see who, what, where, when, and how people and services use their healthcare data.</p>
        </div>

        <div className="principle" id="principle-6">
          <div className="principle-number">6</div>
          <h3>Own Your Data</h3>
          <p>Patients co-own or fully own every health data point about themselves. Health data generated about the patient by a provider is co-owned by both parties. Health data generated by the patient is fully owned by the patient with a right to possess, share, sell, or destroy.</p>
        </div>

        <div className="principle" id="principle-7">
          <div className="principle-number">7</div>
          <h3>Share Your Data</h3>
          <p>Patients are free to use personal health data in any legal way they choose and free to share some or all of their personal health data with whomever they choose.</p>
        </div>

        <div className="principle" id="principle-8">
          <div className="principle-number">8</div>
          <h3>Health Data as a Public Resource</h3>
          <p>Provide access and development tools to public health data for scientific research and acceleration of scientific discovery. Allow patients to share or donate any part of their data, either as de-identified or real data, to science.</p>
        </div>

        <div className="principle" id="principle-9">
          <div className="principle-number">9</div>
          <h3>Community Engagement</h3>
          <p>A national health literacy service drives adoption of health data models and engages the imagination of the public to understand patient rights and health policy.</p>
        </div>

        <div class="button-container"><Link to="" className="button">Download PDF</Link></div>
      </div>
    </div>

    <div className="community">
      <div className="max-width content-padding pad-vertical">
        <h2 className="header-xl">Be a part to grow the open source healthcare community</h2>

        <div className="community-role">
          <h3>as an Organization</h3>
          <p>what you can do</p>
        </div>
        <div className="community-role">
          <h3>as an Engineer</h3>
          <p>what you can do</p>
        </div>
        <div className="community-role">
          <h3>as an Concerned Citizen</h3>
          <p>what you can do</p>
        </div>

        <div class="button-container"><Link to="/contact/" className="button">Get in touch</Link></div>
      </div>
    </div>

  </Layout>
)

export default Mission
