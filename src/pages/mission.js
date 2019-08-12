import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'

const Mission = () => (
  <Layout>
    <div className="hero-container">
      <div className="hero hero--fixed hero--mission hidden--sm">
        <Hero hero="open-source-black-box-wide.jpg" />
      </div>
      <div className="hero hero--fixed hero--mission hidden--lg">
        <Hero hero="open-source-black-box.jpg" />
      </div>
    </div>

    <div className="max-width content-padding pad-vertical header-padding">
      <div className="header-container header-container--mission">
        <h1 className="text--center mobile-squish-md">We live in a closed healthcare system</h1>
        <p className="text--center mobile-squish-md">We demand that our healthcare services be open.</p>
      </div>
    </div>

    <div className="content">
      <div className="background--dark-purple text--white">
        <div className="max-width content-padding pad-vertical">
          <h2 className="header-xl">OS Healthcare Missionette</h2>
          <p>Corporate healthcare is killing us.</p>

          <p>We’re dying younger,<br/>
            maternal mortality is ticking up,<br/>
            and big money is running healthcare,<br/>
            at our expense.</p>

          <p>The algorithms that drive our care,<br/>
          the software that dictates our parents’ care,<br/>
          our neighborhood’s care, our nation’s care,<br/>
          and the everyday services we rely on,<br/>
          feed on our experiences,<br/>
          and are governed by black boxes and crooked biases.</p>

          <p>It’s our health.<br/>
            Our very lives are at stake.</p>

          <p>We demand open source healthcare.<br/>
            Because healthcare is too important to be closed.</p>

          <p>We, the atomic units of the health system,<br/>
            can bend it back to the light.</p>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <p>Why is open source critical in healthcare?</p>
        <h2 className="header-xl">Open Source is...</h2>
        <h3>A Credo</h3>
        <p>Open source is a philosophy on how to make and use products. Employing extensive peer review and open evolution of community contributions results in higher-quality and more reliable software.<a href="#references"><sup>1</sup></a> This transparency benefits private organizations as well as the greater public.<a href="#references"><sup>2</sup></a></p>
        <h3>A Collaboration</h3>
        <p>Several licenses are available to govern the terms of how open source collaboration functions. Being able to customize the level to which product source code, data, or processes are redistributable or modifiable means that the benefits from creating and using open source are available to an extremely wide range of businesses.<a href="#references"><sup>2</sup></a></p>
        <h3>A Form of Citizenship</h3>
        <p>Open collaboration extends beyond software into communities that share ideas and generate content, both digital and physical.<a href="#references"><sup>2</sup></a> These communities amplify the reputations of their contributors, and create a reservoir of ideas that power open source products.</p>
      </div>

      <div className="background--dark-purple">
        <div className="max-width content-padding pad-vertical">
          <h2 className="header-xl text--center mobile-squish-md">Open Source is Critical for Digital Health</h2>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <p>How will OS impact Healthcare?</p>
        <h2 className="header-xl">Open Source will...</h2>
        <h3>Empower interoperability</h3>
        <p>Without open standards for health information, hundreds of different healthcare IT systems are currently unable to communicate with each other, costing us $77.8 billion per year<a href="#references"><sup>3</sup></a> in the United States alone.</p>
        <h3>Establish open standards of data</h3>
        <p>Development of non-proprietary healthcare standards will create an incentive for the providers of commercial healthcare IT products to adopt models of compatible data exchange and information systems</p>
        <h3>Allow greater provider benefits</h3>
        <p>Using open standards to improve health information networks and electronic medical record systems will allow patient data to become more portable between healthcare providers than it is today, ensuring more accurate and efficient care for patients. At the same time, having open source software options will free healthcare providers from being locked in with one vendor.</p>
        <h3>Improve patient outcomes</h3>
        <p>With open source healthcare IT solutions, regions with limited resources that cannot afford expensive proprietary solutions will still have options for quality software to help them deliver quality care.<a href="#references"><sup>4</sup></a> Most importantly, the open source model is consistent with the healthcare philosophy of sharing best practices and innovations in care delivery<a href="#references"><sup>3</sup></a> to improve health &mdash; with benefits for individual patients, as well as the entire population.</p>
      </div>

      <div className="background--dark-purple">
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
          <div className="button-container">
            <div class="button-mask">
              <span class="mask"><Link to="/evidence/">Evidence</Link></span>
              <button type="button" name="Hover"><Link to="/evidence/">Evidence</Link></button>
            </div>
          </div>
        </div>

        <hr/>

        <div className="link-section">
          <h2 className="header-xl text--center">Find out the organizing principles of OSHC</h2>
          <div className="button-container">
            <div class="button-mask">
              <span class="mask"><Link to="/take-action/">Take action</Link></span>
              <button type="button" name="Hover"><Link to="/take-action/">Take action</Link></button>
            </div>
          </div>
        </div>

        <hr />

        <div className="link-section">
          <h2 className="header-xl text--center">Work with us</h2>
          <p className="text--center">on creating an open source future to drive better healthcare for all.</p>
          <div className="button-container">
            <div class="button-mask">
              <span class="mask"><Link to="/contact/">Get in touch</Link></span>
              <button type="button" name="Hover"><Link to="/contact/">Get in touch</Link></button>
            </div>
          </div>
        </div>
      </div>

      <div className="background--gray-light">
        <div className="max-width content-padding pad-vertical">
          <h2 className="header-xl">References</h2>
          <div id="references" className="text--sm">
            <ol className="ol reference-list ol--sm">
              <li>M. Alsaffar, P. Yellowlees, A. Odor, and M. Hogarth. The State of Open Source Electronic Health Record Projects: A Software Anthropology Study. JMIR Medical Informatics. vol. 5, no. 1, p. e6. 2017.</li>
              <li><a href="https://en.wikipedia.org/wiki/Open_collaboration" rel="noopener noreferrer" target="_blank">Open collaboration. Wikipedia. 2018. Accessed 3 Jan 2018.</a></li>
              <li>M. Goulde and M. Holt. Open Source Software: A Primer for Health Care Leaders. Oakland, CA: California HealthCare Foundation. 2006.</li>
              <li>P. Millard, J. Bru, and C. Berger. Open-source point-of-care electronic medical records for use in resource-limited settings: systematic review and questionnaire surveys. The BMJ. vol. 2, no. 4, p. e000690. 2012.</li>
            </ol>
          </div>
        </div>
      </div>

    </div>

  </Layout>
)

export default Mission
