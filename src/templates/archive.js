import React from "react"
import { Link, graphql, navigate } from "gatsby"
import window from "browser-monads"
import Layout from "../components/Layout"

const Archive = props => {
  const blogContent = props.data.allContentfulBlog
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <p>Test</p>
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
