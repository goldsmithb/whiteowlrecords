/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
  siteMetadata: {
    title: `WHITEOWLRECORDS`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      "gatsby-plugin-mdx",
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [`gatsby-remark-autolink-headers`],
        },
      },
      "gatsby-transformer-sharp",
      {
        resolve: 'gatsby-source-sanity',
        options: {
            projectId: '4xbrcs0m',
            dataset: 'production',
            watchMode: true, // Updates your pages when you create or update documents
            token: process.env.SANITY_READ_TOKEN,
          },
      },
      {
        resolve: "gatsby-plugin-sanity-image",
        options: {
          // Sanity project info (required)
          projectId: "4xbrcs0m",
          dataset: "production",
        },
      }
  ],
}
