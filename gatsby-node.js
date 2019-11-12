const path = require("path")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Skapar sida för ett blogginlägg
  const getBlog = makeRequest(
    graphql,
    `
  {allContentfulBlog (
    sort: {fields: [createdAt], order: DESC}
    filter: {
      node_locale: {eq:"sv-SE"}},)
    {
      edges {
        node {
          id
          slug
        }
      }
    }
    }
  `
  ).then(result => {
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  // Blogsidan med alla blogginlägg
  const getArchive = makeRequest(
    graphql,
    `
    {allContentfulBlog (
      sort: {fields: [createdAt], order: DESC}
      filter: {
        node_locale: {eq:"sv-SE"}},)
        {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `
  ).then(result => {
    const blogs = result.data.allContentfulBlog.edges
    const blogsPerPage = 9
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i == 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/archive.js"),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          curretPage: i + 1,
        },
      })
    })
  })

  // En sida för en tävling
  const getCompetitions = makeRequest(
    graphql,
    `
    {allContentfulCompetition {
        edges {
          node {
            id
            information
            title
            slug
            whereAndWhen
          }
        }
      }
    }
      `
  ).then(result => {
    result.data.allContentfulCompetition.edges.forEach(({ node }) => {
      createPage({
        path: `/competitions/${node.slug}`,
        component: path.resolve("./src/templates/competitions.js"),
        context: {
          id: node.id,
        },
      })
    })
  })

  return Promise.all([getBlog, getArchive, getCompetitions])
}
