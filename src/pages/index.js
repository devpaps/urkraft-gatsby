import React from "react"
import Layout from "../components/Layout"
import "../assets/css/reboot.css"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

import MainStyle from "../components/modules/mainstyle.module.css"
import "../assets/css/global.css"

const index = props => (
  <>
    <Layout>
      <section className={MainStyle.mainHero}>
        <div className={MainStyle.heroContainer}>
          <Img
            className={MainStyle.heroImage}
            fluid={props.data.imageOne.childImageSharp.fluid}
          />
          <div className="contain">
            <div className={MainStyle.heroText}>
              Urkraft <p>Gym</p>
            </div>
            <div className={MainStyle.heroSubText}>
              <p>
                TDIK är medlem i Svenska volleybollförbundet Svenska
                styrkelyftsförbundet och Svenska bordtennisförbundet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`container ${MainStyle.whatWeDo}`}>
        <div className={MainStyle.triangle}></div>
        <div className={MainStyle.whatWeDoBox}>
          <h1>Vad håller vi på med?</h1>
        </div>
      </section>
    </Layout>
  </>
)

export default index

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "header-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
