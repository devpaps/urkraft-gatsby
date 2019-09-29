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
      <div className={`innerContainerBlog`}>
        <div
          key={props.data.contentfulBlog.id}
          className={` ${blogStyle.hero}`}
          style={{
            backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${props.data.contentfulBlog.featuredImage.fluid.src})`,
          }}
        ></div>
        <div className="header">
          <div className={blogStyle.blogWrapper}>
            <h1>{props.data.contentfulBlog.title}</h1>
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
