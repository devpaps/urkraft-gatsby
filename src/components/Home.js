import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import MainStyle from "../components/modules/home.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allContentfulBlog(
          limit: 3
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              title
              category {
                id
                title
              }
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
          <div className={MainStyle.BlogContainer} key={edge.node.id}>
            <div className={MainStyle.BlogContainerImageBox}>
              <Img
                fluid={edge.node.featuredImage.fluid}
                alt={edge.node.featuredImage.title}
              />
              onClick={() => navigate(`/blog/${edge.node.slug}`)}
              {edge.node.category.map(categories => (
                <p>{categories.category}</p>
              ))}
            </div>
            <p>{edge.node.title}</p>
          </div>
        ))}
      </>
    )}
  />
)
