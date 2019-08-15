import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiArrowRight } from "react-icons/fi"
import { FiEdit3 } from "react-icons/fi"

import HomeStyle from "../components/modules/home.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        HomeQuery: allContentfulBlog(
          limit: 3
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "sv-SE" }, home: { eq: true } }
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
                title
              }
              shortDescription
              createdAt(formatString: "Do MMM, YYYY", locale: "sv-SE")
            }
          }
        }

        Tavling: allContentfulCompetition(filter: { visas: { eq: true } }) {
          edges {
            node {
              id
              title
              slug
              information
              whereAndWhen
            }
          }
        }
      }
    `}
    render={data => (
      <div className={HomeStyle.home}>
        <div className={HomeStyle.homeLeft}>
          <div className={HomeStyle.homeText}>
            <h1>Senaste Nyheterna</h1>
            <p
              className={HomeStyle.showAllText}
              onClick={() => navigate(`./blog/`)}
            >
              Visa alla <span>></span>
            </p>
          </div>
          <div className={HomeStyle.homeLeftCards}>
            {data.HomeQuery.edges.map(edge => (
              <div
                key={edge.node.id}
                className={HomeStyle.card}
                onClick={() => navigate(`/blog/${edge.node.slug}`)}
              >
                <div className={HomeStyle.image}>
                  {" "}
                  <Img
                    fluid={edge.node.featuredImage.fluid}
                    alt={edge.node.featuredImage.title}
                    className={HomeStyle.imageBox}
                  />
                </div>
                <div className={HomeStyle.cardText}>
                  <span>
                    {edge.node.category.map(categories => (
                      <p className={HomeStyle.tags}>
                        {categories.title.split(" ")}{" "}
                      </p>
                    ))}
                  </span>
                  {
                    <p style={{ margin: "0.5em 0 1em" }}>
                      <FiEdit3 /> {edge.node.createdAt}
                    </p>
                  }
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.shortDescription}</p>
                  <p>{edge.node.featuredImage.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={HomeStyle.homeRight}>
          <div className={HomeStyle.homeRightCompetitionBox}>
            {data.Tavling.edges.map(edge => (
              <div
                key={edge.node.id}
                className={HomeStyle.homeRightCompetitionBoxText}
              >
                <p>{edge.node.information}</p>
                <h1>{edge.node.title}</h1>
                <p>{edge.node.whereAndWhen}</p>
                <button
                  className={HomeStyle.button}
                  onClick={() => navigate(`/tavling/${edge.node.slug}`)}
                >
                  Anmälan
                  <FiArrowRight className={HomeStyle.buttonIcon} />
                </button>
              </div>
            ))}
          </div>
          <div className={HomeStyle.homeRightMemberBox}>
            <div className={HomeStyle.homeRightMemberBoxText}>
              <h1>Bli medlem hos oss</h1>
              <p>
                Blev inte beachformen som du hade tänkt dig? Ingen fara, lös ett
                träningskort på Urkraft för 300:- så rockar du på stranden nästa
                år.
              </p>
              <input
                type="email"
                name="email"
                placeholder="Ange er e-mail här"
              />
              <button className={HomeStyle.buttonMember}>Bli medlem</button>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)
