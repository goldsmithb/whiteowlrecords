/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: "WHITEOWLRECORDS",
		siteUrl: "https://www.yourdomain.tld",
	},
	plugins: [
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				trackingIds: [
					"G-XXES8TFKCR", // Google Analytics / GA
				],
				gtagConfig: {
					// IP anonymization for GDPR compliance
					anonymize_ip: true,
				},
				pluginConfig: { 
					// Puts tracking script in the head instead of the body
					head: true,
					// Disable analytics for users with Do Not Track enabled
					respectDNT: true,
				},
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			}
		},
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: ["gatsby-remark-autolink-headers"],
			},
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-sanity",
			options: {
				projectId: "4xbrcs0m",
				dataset: "production",
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
		},
	],
};
