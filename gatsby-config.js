/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
  ],
}
