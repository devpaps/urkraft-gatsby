/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
//const facebookPageID = '879080106';
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Urkraft Gym`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Urkraft Gym",
        short_name: "Urkraft Gym",
        start_url: "/",
        background_color: "#E93F33",
        theme_color: "#E93F33",
        display: "minimal-ui",
        icon: "src/assets/images/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xjvps6qvbbfd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: false,
      },
    },
  ],
}

