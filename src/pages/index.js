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
      <section className={MainStyle.whatWeDo}>
        {/* <div className={MainStyle.triangle}></div> */}
        <div className={`container ${MainStyle.test}`}>
          <div className={MainStyle.whatWeDoBox}>
            <h1>Vad håller vi på med?</h1>
            <p>
              Inriktningen är styrketräning, volleyboll/beachvolleyboll och
              bordtennis. Gymmet, Urkraft gym, finns i källaren i Kyrktåsjö
              skola.
            </p>
          </div>
          <div className={MainStyle.whatWeDoImageText}>
            <h1>Flerfaldiga medaljörer</h1>
            <p>
              TDIK är medlem i Svenska volleybollförbundet Svenska
              styrkelyftsförbundet och Svenska bordtennisförbundet. Volleyboll
              och bordtennis spelas i skolans gympasal och beachvolleyboll
              spelas på Invallningen i Tåsjö östra.
            </p>
          </div>
        </div>
        <div className={MainStyle.whatWeDoImage}>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
    </Layout>
  </>
)

export default index

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "header-image.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "whatWeDo.jpg" }) {
      ...fluidImage
    }
  }
`
