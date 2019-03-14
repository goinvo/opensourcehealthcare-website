import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticleCard from '../components/articleCard'
import spotlightItems from '../data/article-spotlight-order'

const IndexPage = () => (
  <Layout>
    <div className="hero-container">
      <div className="hero hero--fixed hero--home hidden--sm"><Hero hero="open-source-home.png" /></div>
      <div className="hero hero--fixed hero--home hidden--md"><Hero hero="open-source-home-mobile.jpg" /></div>
    </div>

    <div className="max-width content-padding pad-vertical header-padding">
      <div className="header-container header-container--home">
      <h1 className="text--center mobile-squish-sm">We demand <span className="text--red"> open source </span> healthcare</h1>
      <h2 className="text--center mobile-squish-sm header-xl">We must set healthcare free</h2>
      </div>
    </div>


      <div className="open-source-is background--dark-gradient-linear-transparent">
        <div className="max-width content-padding pad-vertical pad-top--double header-padding">
          <p className="text--center journal-link"><Link to="/download/" target="_blank" rel="noopener">Check out the Open Source Healthcare journal</Link></p>
          <div className="mission-home text--white">
              <h4>Open Source (OS) Software is</h4>
              <p>something that anyone can change and share, because it's publicly available under a generous license. While it first began with computer code, open source now influences how projects and businesses work, and our lives benefit from this open sharing. Open source has grown into a way of participating with many others that asks for transparency, community-based collaboration, and meritocracy. The best ideas float to the top, and you earn trust by what you do and how you amplify the group.</p>
              <p>Our internet is infused with open source ideas and services &mdash; from how cell phones communicate, to how e-mail is directed from one person to the next, to Linux. All of these technologies working together are the operating system of the internet.</p>
              <p>Here in the US, healthcare is
                <br />sometimes amazing,
                <br />often lifesaving,
                <br />always expensive,
                <br />and mostly closed.</p>
              <p>It's tribal at its core &mdash; each hospital, each doc, each healthcare system invents its own way &mdash;to the detriment of our collective health.</p>
          </div>
        </div>
      </div>

    <div className="content">
      <div className="max-width content-padding pad-vertical">
        <div className="reasons">
          <div className="reason">
            <p>We have open standards <br/>for finance,</p>
            <p>because we value our money more than our health.</p>
          </div>
          <div className="reason">
            <p>We have open standards <br/>for finance</p>
            <p>because getting to the destination is a necessity.</p>
          </div>
          <div className="reason">
            <p>We have open standards <br/>for finance</p>
            <p>because <strong>our lives depend on it</strong>.</p>
          </div>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <h3>Healthcare is too important to be closed.</h3>
        <p>Our healthcare services need to be open. We are working towards an open source future to drive better healthcare for all.</p>
      </div>

      <div className="max-width content-padding pad-vertical">
        <div className="article-section">
          <h2 className="header-xl">Spotlight</h2>
          {spotlightItems.map((spotlightArticle, i) => {
            return (
              <ArticleCard
                link={spotlightArticle.link}
                author={spotlightArticle.author}
                title={spotlightArticle.title}>
              </ArticleCard>
            )
          })}
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <div className="editors-home">
          <h3>Editors</h3>
          <h3 className="text--red">Open EHRs Are Going Global</h3>
          <p>Creating, updating, and reconciling medical records is one of the most visible areas where technology has shaped healthcare. While most electronic health record (EHR) systems remain proprietary, over 30 countries now use open source EHRs in some capacity.<a href="#references"><sup>2</sup></a></p>
          <p>Founded in a rich legacy of global initiative to meet shared, human needs, successful open source healthcare IT initiatives are not only taking a hold in the United States<a href="#references"><sup>3</sup></a> but also spreading to many other communities in the world.</p>
          <div className="button-container"><Link to="/evidence/" className="button button--primary">More evidence</Link></div>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <div className="principles-home">
          <p>The path towards health IT transformation</p>
          <h2 className="header-xl">Nine Organizing Principles of Open Source Healthcare</h2>
          <p>A framework for responsible use and management of patient health data and information for the advancement of health quality, health research, and data ownership.</p>
          <ol>
            <li><Link to="/take-action/#principle-1">Simple National Standard</Link></li>
            <li><Link to="/take-action/#principle-2">Cost Transparency</Link></li>
            <li><Link to="/take-action/#principle-3">Responsible Use</Link></li>
            <li><Link to="/take-action/#principle-4">Data Usage Transparency</Link></li>
            <li><Link to="/take-action/#principle-5">Transactional Care</Link></li>
            <li><Link to="/take-action/#principle-6">Own Your Data</Link></li>
            <li><Link to="/take-action/#principle-7">Share Your Data</Link></li>
            <li><Link to="/take-action/#principle-8">Health Data as a Public Resource</Link></li>
            <li><Link to="/take-action/#principle-9">Community Engagement</Link></li>
          </ol>
          <div className="button-container"><Link to="/take-action/" className="button button--primary">Take action</Link></div>
        </div>
      </div>

      <div className="max-width content-padding pad-vertical">
        <div className="work-with-home">

          <h2 className="header-xl">Work with us towards the open source future</h2>
          <p>We work with our clients on open source products that impact millions of lives every year. We’ve also worked on a number of our own open source products as well.</p>

          <div class="projects-chunk">
            <h3>OS Projects</h3>
            <ul className="no-ul">
              <li>openAutism.org</li>
              <li>healthPicture.org</li>
              <li><Link to="http://standardhealthrecord.org/" rel="noopener noreferrer" target="_blank">standardhealthrecord.org</Link></li>
              <li><Link to="http://inspiredehrs.org" rel="noopener noreferrer" target="_blank">InspiredEHRs.org</Link></li>
            </ul>
          </div>

          <div className="projects-chunk">
            <h3>Clients</h3>
            <p>AHRQ, HHS, CMS, NIH, California Healthcare Foundation, State of MAssachusetts, MITRE, Walgreens</p>
            <div className="button-container"><Link to="/contact/" className="button button--primary">Get in touch</Link></div>
          </div>

        </div>
      </div>

      <div className="background--gray-light">
        <div className="max-width content-padding pad-vertical">
          <h2 className="header-xl">References</h2>
          <div id="references" className="text--sm">
            <p>1.
              <br/>F. Aminpour, F. Sadoughi and M. Ahamdi, “Utilization of open source electronic health record around the world: A systematic review”, Journal of Research in Medical Sciences : The Official Journal of Isfahan University of Medical Sciences, vol. 19, no. 1, pp. 57-64, 2014.</p>
            <p>2.
              <br/>“Frequently Asked Questions | Medsphere Commercial”, Medsphere, 2018. [Online]. Available: <a href="http://www.medsphere.com/company/frequently-asked-questions" rel="noopener noreferrer" target="_blank">http://www.medsphere.com/company/frequently-asked-questions</a>. [Accessed: 03 Jan 2018].</p>
          </div>
        </div>
      </div>

    </div>

  </Layout>
)

export const indexPageQuery = graphql`
  query IndexQuery {
    allMdx {
      edges {
        node {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            author
            title
          }
        }
      }
    }
  }
`

export default IndexPage
