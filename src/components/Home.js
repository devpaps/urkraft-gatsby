import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiArrowRight } from "react-icons/fi"
import { FiEdit3 } from "react-icons/fi"
import { IoMdPricetag } from "react-icons/io"
import { Link } from "gatsby"

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
                  tracedSVG
                  ...GatsbyContentfulFluid
                }
                title
              }
              shortDescription
              createdAt(formatString: "Do MMM, YYYY", locale: "sv-SE")
              seoAuthor
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
              <article
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
                    <IoMdPricetag />
                    {edge.node.category.map(categories => (
                      <p className={HomeStyle.tags} key={edge.node.id}>
                        {categories.title}
                      </p>
                    ))}
                  </span>
                  {
                    <p style={{ margin: "0.5em 0 1em" }}>
                      <FiEdit3 /> {edge.node.createdAt}
                      {" - "}
                      <span> Av {edge.node.seoAuthor}</span>
                    </p>
                  }
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.shortDescription}</p>
                  <p>{edge.node.featuredImage.text}</p>
                </div>
              </article>
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
                  onClick={() => navigate(`/competitions/${edge.node.slug}`)}
                >
                  Läs mer
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
                träningskort på Urkraft för 300:- genom att swischa till nummer
                <strong> 1236178594</strong>, så rockar du på stranden nästa år.
              </p>
              <p>
                För att få koden hör av dig till Katarina så kollar hon att
                betalningen är genomförd och ni får koden. Mer information och
                Katarinas nummer hittar ni
                <Link to="/omoss">
                  <button className={HomeStyle.buttonMember}>
                    Mer information
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)
