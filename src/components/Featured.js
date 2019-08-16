import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import FeaturedStyle from "../components/modules/featured.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedQuery {
        allContentfulBlog(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "sv-SE" }, featured: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              title
              shortDescription
              featuredImage {
                fluid(maxWidth: 1200, quality: 100) {
                  src
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allContentfulBlog.edges.map(edge => (
          <div className={FeaturedStyle.InfoContainer} key={edge.node.id}>
            <div className={FeaturedStyle.InfoContainerImageBox}>
              <Img fluid={edge.node.featuredImage.fluid} alt="oss" />
            </div>
            <div className={FeaturedStyle.InfoContainerImageText}>
              <h1>{edge.node.title}</h1>
              <p className={FeaturedStyle.InfoContainerImageTextParagraph}>
                {edge.node.shortDescription}
              </p>
              <button
                onClick={() => navigate(`/blog/${edge.node.slug}`)}
                className={FeaturedStyle.whatWeDoButton}
              >
                Läs mer
              </button>
            </div>
            {/* <button
              className={FeaturedStyle.whatWeDoButton}
              onClick={() => navigate(`/blog${edge.node.slug}`)}
            >
              Läs mer
            </button> */}
          </div>
        ))}
      </>
    )}
  />
)
