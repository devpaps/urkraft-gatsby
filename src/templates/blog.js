import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

import blogStyle from "../components/modules/blog.module.css"

const BlogTemplate = props => {
  return (
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Blogg</title>
      </Helmet>
      <div >
        <div
          key={props.data.contentfulBlog.id}
          className={blogStyle.hero}
        >
          <Img fluid={props.data.contentfulBlog.featuredImage.fluid} className={blogStyle.heroImage}/>
        </div>
        <div className={blogStyle.wrapper}>
          <div className={blogStyle.blogWrapper}>
            <h1 className={blogStyle.header}>{props.data.contentfulBlog.title}</h1>
            <div
              className={blogStyle.content}
              dangerouslySetInnerHTML={{
                __html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`,
              }}
            ></div>
          </div>
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
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredImage {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`

export default BlogTemplate
