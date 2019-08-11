import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import MainStyle from "../components/modules/featured.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedQuery {
        allContentfulBlog(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
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
                  ...GatsbyContentfulFluid
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
          <div className={MainStyle.InfoContainer} key={edge.node.id}>
            <div className={MainStyle.InfoContainerImageBox}>
              <Img fluid={edge.node.featuredImage.fluid} alt="oss" />
            </div>
            <div className={MainStyle.InfoContainerImageText}>
              <h1>{edge.node.title}</h1>
              <p className={MainStyle.InfoContainerImageTextParagraph}>
                {edge.node.shortDescription}
              </p>
              <button
                onClick={() => navigate(`/blog${edge.node.slug}`)}
                className={MainStyle.whatWeDoButton}
              >
                Läs mer
              </button>
            </div>
            {/* <button
              className={MainStyle.whatWeDoButton}
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
