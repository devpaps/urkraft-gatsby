import React from "react"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Featured from "../components/Featured"
import Home from "../components/Home"

import { Link, graphql } from "gatsby"

import HantelSVG from "../assets/images/svg/dumbbell.svg"
import PingisSVG from "../assets/images/svg/ping-pong.svg"
import HandbollSVG from "../assets/images/svg/volleyball.svg"

import "../assets/css/global.css"
import MainStyle from "../components/modules/mainstyle.module.css"

const index = props => (
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
      <div className={`container ${MainStyle.test}`}>
        <div className={MainStyle.whatWeDoBox}>
          <h1>Vad håller vi på med?</h1>
          <p>
            Inriktningen är styrketräning, volleyboll/beachvolleyboll och
            bordtennis. Gymmet, Urkraft gym, finns i källaren i Kyrktåsjö skola.
          </p>
          <div className={MainStyle.whatWeDoIcons}>
            <div className={MainStyle.whatWeDoIconsBoxes}>
              <div>
                <HantelSVG style={{ width: "50px", height: "50px" }} />
              </div>
              <div>
                <p>Gymmar</p>
              </div>
            </div>
            <div className={MainStyle.whatWeDoIconsBoxes}>
              <div>
                <PingisSVG style={{ width: "50px", height: "50px" }} />
              </div>
              <div>
                <p>Spelar pingis</p>
              </div>
            </div>
            <div className={MainStyle.whatWeDoIconsBoxes}>
              <div>
                <HandbollSVG style={{ width: "50px", height: "50px" }} />
              </div>
              <div>
                <p>Skjuter handboll</p>
              </div>
            </div>
          </div>
        </div>
        <div className={MainStyle.whatWeDoImageText}>
          <h1>En aktiv klubb</h1>
          <p>
          Gymmet, Urkraft gym, finns i källaren i Kyrktåsjö skola. Varje vecka kör vi Hiit-träning. Vi erbjuder även Zumba i samarbete med Madelene Östman. Under vintern arrangerar vi Korvloppet, ett skidlopp för alla 0–100 år. 
          </p>
          {/* <Link to="/omoss" className={MainStyle.whatWeDoButton}>
            Läs mer
          </Link> */}
        </div>
      </div>
      <div className={MainStyle.whatWeDoImage}>
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      </div>
    </section>

    <section>
      <Featured />
    </section>

    <section>
      <Home />
    </section>
  </Layout>
)

export default index

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
        tracedSVG
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
    imageThree: file(relativePath: { eq: "infobox.jpg" }) {
      ...fluidImage
    }
  }
`
