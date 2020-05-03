import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/Layout"
import { IoMdPricetag } from "react-icons/io"

import ArchiveStyle from "../components/modules/archive.module.css"

const Archive = props => {
  const blogContent = props.data.allContentfulBlog



  return (
    <Layout>
      <section className={ArchiveStyle.container}>
        <h1 className={ArchiveStyle.header}>Alla inlägg</h1>
        <div className={ArchiveStyle.feed}>
          {blogContent.edges.map(edge => (
            <div
              key={edge.node.id}
              className={ArchiveStyle.card}
              role="article"
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
                <div key={categories.id}>
                  <p className={ArchiveStyle.card__category}>
                    <IoMdPricetag /> {categories.title}
                  </p>
                </div>
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
