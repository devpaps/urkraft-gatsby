const autoprefixer = require("autoprefixer")

const environment =
  process.env.NODE_ENV === "production" ? "development" : process.env.NODE_ENV

require("dotenv").config({
  path: `.env.${environment}`,
})

module.exports = {
  siteMetadata: {
    title: `Urkraft Gym`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik:300,400,700`],
        display: "swap",
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
        icon: "src/assets/images/logo.png",
        crossOrigin: `use-credentials`,
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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
          }),
        ],
      },
    },
  ],
}
