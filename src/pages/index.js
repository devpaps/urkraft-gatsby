import React from "react"
import Layout from "../components/Layout"
import Featured from "../components/Featured"
import Home from "../components/Home"
import "../assets/css/reboot.css"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

import HantelSVG from "../assets/images/svg/dumbbell.svg"
import PingisSVG from "../assets/images/svg/ping-pong.svg"
import HandbollSVG from "../assets/images/svg/volleyball.svg"

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
        <div className={`container ${MainStyle.test}`}>
          <div className={MainStyle.whatWeDoBox}>
            <h1>Vad håller vi på med?</h1>
            <p>
              Inriktningen är styrketräning, volleyboll/beachvolleyboll och
              bordtennis. Gymmet, Urkraft gym, finns i källaren i Kyrktåsjö
              skola.
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
            <h1>Flerfaldiga medaljörer</h1>
            <p>
              TDIK är medlem i Svenska volleybollförbundet Svenska
              styrkelyftsförbundet och Svenska bordtennisförbundet. Volleyboll
              och bordtennis spelas i skolans gympasal och beachvolleyboll
              spelas på Invallningen i Tåsjö östra.
            </p>
            <Link to="/omoss" className={MainStyle.whatWeDoButton}>
              Läs mer
            </Link>
          </div>
        </div>
        <div className={MainStyle.whatWeDoImage}>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
      {/*       <section className={MainStyle.InfoContainer}>
        <div className={MainStyle.InfoContainerImageBox}>
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <div className={MainStyle.InfoContainerImageText}>
          <h1>Styrkelyft sedan 2000</h1>
          <p className={MainStyle.InfoContainerImageTextParagraph}>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            ”and” and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
          <Link to="/omoss" className={MainStyle.whatWeDoButton}>
            Läs mer
          </Link>
        </div>
      </section> */}
      <section>
        <Featured />
      </section>
      <section>
        <Home />
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

/* export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
` */

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

/* export const pageFixedQuery = graphql`
  query {
    vollyBoll: file(relativePath: { eq: "images/volleyboll.png" }) {
      ...fixedImage
    }
    tablePingis: file(relativePath: { eq: "ping-pong.png" }) {
      ...fixedImage
    }
    dumBell: file(relativePath: { eq: "dumbell.png" }) {
      ...fixedImage
    }
  }
` */
