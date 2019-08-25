import React from "react"
import { Link, graphql, navigate } from "gatsby"
import { window } from "browser-monads"
import Layout from "../components/Layout"
import { IoMdPricetag } from "react-icons/io"

import ArchiveStyle from "../components/modules/archive.module.css"

const Archive = props => {
  const blogContent = props.data.allContentfulBlog
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <section style={{ paddingBottom: "10em" }}>
        <div className={ArchiveStyle.feed}>
          {blogContent.edges.map(edge => (
            <div
              key={edge.node.id}
              className={ArchiveStyle.card}
              style={{
                backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`,
              }}
              onClick={() => navigate(`/blog/${edge.node.slug}`)}
            >
              {edge.node.category.map(categories => (
                <p className={ArchiveStyle.card__category}>
                  <IoMdPricetag /> {categories.title}
                </p>
              ))}
              <p className={ArchiveStyle.card__title}>{edge.node.title}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Archive

export const pageQuery = graphql`
  query ArchiveQuery($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { fields: [createdAt], order: DESC }
      filter: { node_locale: { eq: "sv-SE" } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          title
          createdAt
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
`
