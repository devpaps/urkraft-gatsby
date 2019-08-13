import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import HomeStyle from "../components/modules/home.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query { HomeQuery: 
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

       Tavling: 
        allContentfulCompetition(
          filter: {visas: {eq: true}}
        ) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      
      }
    `}
    render={data => (
      <div className={HomeStyle.home}>
        <div className={HomeStyle.homeLeft}>
          <h1>Senaste Nyheter</h1>
          <p>Visa alla</p>
          {data.HomeQuery.edges.map(edge => (
            <div
              key={edge.node.id}
              className={HomeStyle.card}
              onClick={() => navigate(`/blog/${edge.node.slug}`)}
            >
              <Img fluid={edge.node.featuredImage.fluid} alt="oss" />
              {edge.node.category.map(categories => (
                <p>{categories.title}</p>
              ))}
              <p>{edge.node.title}</p>
            </div>
          ))}
        </div>
        <div className={HomeStyle.homeRight}>
          <div className={HomeStyle.homeRightCompetitionBox}>
            {data.Tavling.edges.map(edge => (
              <div key={edge.node.id} onClick={() => navigate(`/tavling/${edge.node.slug}`)}>
                <p>asd</p>
                <h1>{edge.node.title}</h1>
              </div>
            ))}
          </div>
          <div className={HomeStyle.homeRightMemberBox}>
            <p>Bli medlem</p>
          </div>
        </div>
      </div>
    )}
  />
)
