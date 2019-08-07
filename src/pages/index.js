import React from "react"
import Layout from "../components/Layout"
import "../assets/css/reboot.css"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

import MainStyle from "../components/mainstyle.module.css"

const index = props => (
  <main>
    <Layout>
      <section className={MainStyle.mainHero}>
        <div className={MainStyle.heroContainer}>
          <Img
            className={MainStyle.heroImage}
            fluid={props.data.imageOne.childImageSharp.fluid}
          />
          <div className={MainStyle.heroText}>
            Urkraft <span>Gym</span>
          </div>
        </div>
      </section>
    </Layout>
  </main>
)

export default index

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "header-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
