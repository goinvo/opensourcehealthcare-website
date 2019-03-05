import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Mission = () => (
  <Layout>
    <div className="hero-container">
      <div className="max-width content-padding pad-vertical pad-top--double header-padding">
        <h1 className="text--center">We live in a closed healthcare system</h1>
        <p className="text--center mobile-squish">We demand that our healthcare services be open.</p>
      </div>
      <div className=" hero hero--fixed hero--mission z-0"></div>
    </div>

    <div className="z-1">
      <div className="background--dark-gradient-radial">
        <div className="max-width content-padding pad-vertical">
          <h2 className="header-xl">OS Healthcare Missionette</h2>
          <p>We live in a closed healthcare system. The algorithms that drive our care, to our clinical and life data, to hospital and treatment pricing, are governed by blackbox services.</p>
          <p>By using these closed systems, we are actively designed out of the decision-making process, in favor of corporate "optimized care" for optimized returns vs optimized health outcomes. The crooked biases built into software, implemented with intent or accidentally, need interrogation, citizen collaboration, and correction.</p>
          <p>It's our health.
            <br/>Our very lives are at stake.</p>
          <p>We demand that our healthcare services be open to inspect and correct bias, to be accessible for rapid innovation and evolution, and to become more valuable as more patients, clinicians, clinics, companies, and governments engage in healthcare for all.</p>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <p>Why is open source critical in healthcare?</p>
        <h2 className="header-xl">Open Source is...</h2>
        <h3>A Credo</h3>
        <p>Open source is a philosophy on how to make and use products. Employing extensive peer review and open evolution of community contributions results in higher-quality and more reliable software.[1] This transparency benefitsprivate organizations as well as the greater public.[2]</p>
        <h3>A Collaboration</h3>
        <p>Several licenses are available to govern the terms of how open source collaboration functions. Being able to cus tomize the level to which product source code, data, or processes are redistributable or modifiable means that the benefits from creating and using open source are available to an extremely wide range of businesses.[2]</p>
        <h3>A Form of Citizenship</h3>
        <p>Open collaboration extends beyond software into communities that share ideas and generate content, both digital and physical.[2] These communities amplify the reputations of their contributors, and create a reservoir of ideas that power open source products.</p>
      </div>

      <div className="background--dark-gradient-radial">
        <div className="max-width content-padding pad-vertical">
          <h2 className="header-xl text--center mobile-squish-md">Open Source is Critical for Digital Health</h2>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <p>How will OS impact Healthcare?</p>
        <h2 className="header-xl">Open Source will...</h2>
        <h3>Empower interoperability</h3>
        <p>Without open standards for health information, hundreds of different healthcare IT systems are currently unable to communicate with each other, costing us $77.8 billion per year[25] in the United States alone.</p>
        <h3>Establish open standards of data</h3>
        <p>Development of non-proprietary healthcare standards will create an incentive for the providers of commercial healthcare IT products to adopt models of compatible data exchange and information systems</p>
        <h3>Allow greater provider benefits</h3>
        <p>Using open standards to improve health information networks and electronic medical record systems will allow patient data to become more portable between healthcare providers than it is today, ensuring more accurate and efficient care for patients. At the same time, having open source software options will free healthcare providers from being locked in with one vendor.</p>
        <h3>Improve patient outcomes</h3>
        <p>With open source healthcare IT solutions, regions with limited resources that cannot afford expensive proprietary solutions will still have options for quality software to help them deliver quality care.[26] Most importantly, the open source model is consistent with the healthcare philosophy of sharing best practices and innovations in care delivery[25] to improve health &mdash; with benefits for individual patients, as well as the entire population.</p>
      </div>

      <div className="background--dark-gradient-radial">
        <div className="max-width content-padding pad-vertical">
          <p>The problem is...</p>
          <h2 className="header-xl">Open Source is Under Attack</h2>
          <p>Today, open source is under attack on a variety of fronts and it is losing the fight. Corporations are actively discouraging open source participation through a number of means. Worse yet, the grey area between civic and corporate power is ratcheting up cynicism and driving down engagement in the OS community.</p>
          <p><span className="text--bold">Companies are prohibiting their employees from pursuing outside-the-firewall technical work as a condition of their employment.</span> Such "extra-curricular" activities are critical to playing with, experimenting with, and learning from new ideas, as well as being an engaged open source community member. These constraints go far beyond the standards of non-compete rules: "No unauthorized or external work, regardless of domain, if you work for us fulltime!"</p>
          <p><span className="text--bold">The internet infrastructure has matured and is moving further away from its origins.</span> What once was built with public funding (as a military research project), that evolved through public-private relationships (fiber lines and cell towers), and thrived on open sourcing (Tim Berners Lee's Hypertext) has now become the commercial domain of the Googles and Amazons of the world. Our internet's infrastructure is moving from distributed to centralized services.</p>
          <p className="text--bold">Companies are discouraging interest in open source by actively propagating the false and unsubstantiated myth that open source doesn't generate profits.</p>
          <p><span className="text--bold">We're dismantling a fundamentally democratic system of management in favor of corporate-oriented governance and oversight.</span> Prime examples are the elimination of net neutrality and the shift of the FCC's allegiance from public to corporate interests, which advanced the expansion of "walled gardens" like Amazon and Alibaba.</p>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <div className="link-section">
          <h2 className="header-xl text--center">See points of view</h2>
          <p className="text--center">from thought leaders and check out notable Open Source (OS) projects</p>
          <div class="button-container"><Link to="/evidence/" className="button">Evidence</Link></div>
        </div>
        <hr/>
        <div className="link-section">
          <h2 className="header-xl text--center">Find out the organizing principles of OSHC</h2>
          <div class="button-container"><Link to="/take-action/" className="button">Take action</Link></div>
        </div>
        <hr />
        <div className="link-section">
          <h2 className="header-xl text--center">Work with us</h2>
          <p className="text--center">on creatinv an open source future to drive better healthcare for all.</p>
          <div class="button-container"><Link to="/contact/" className="button">Get in touch</Link></div>
        </div>
      </div>

      <div className="background--gray-light">
        <div className="max-width content-padding pad-vertical">
          <h2 className="header-xl">References</h2>
          <div id="references" className="text--sm">
            <p>1.
              <br/>M. Alsaffar, P. Yellowlees, A. Odor and M. Hogarth, "The State of Open Source Electronic Health Record Projects: A Software Anthropology Study", JMIR Medical Informatics, vol. 5, no. 1, p. e6, 2017.</p>
            <p>2.
              <br/>"Open collaboration", Wikipedia, 2018. [Online]. Available: <a href="https://en.wikipedia.org/wiki/Open_collaboration" rel="noopener noreferrer" target="_blank">https://en.wikipedia.org/wiki/Open_collaboration</a>. [Accessed: 03 Jan 2018].</p>
            <p>25.
              <br/>M. Goulde and M. Holt, Open Source Software: A Primer for Health Care Leaders. Oakland, Calif.: California HealthCare Foundation, 2006.</p>
            <p>26.
              <br/>P. Millard, J. Bru and C. Berger, "Open-source point-of-care electronic medical records for use in resource-limited settings: systematic review and questionnaire surveys", The BMJ, vol. 2, no. 4, p. e000690, 2012.</p>
          </div>
        </div>
      </div>

    </div>

  </Layout>
)

export default Mission
