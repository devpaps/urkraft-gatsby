import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import blogStyle from "../components/modules/blog.module.css"

const BlogTemplate = props => {
  return (
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Blogg</title>
      </Helmet>
      <div className="header">
        <h1>{props.data.contentfulBlog.title}</h1>
        <div className="blogWrapper">
          <div
            dangerouslySetInnerHTML={{
              __html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Blogtemplate($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      id
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      seoTitle
      seoDescription
      seoAuthor
      seoKeywords
      seoImage {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredImage {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`

export default BlogTemplate
