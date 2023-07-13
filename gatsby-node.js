const { craeteFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    query MyQuery {
        allSanityPost(filter: {_id: {eq: "$id"}}) {
          nodes {
            body {
              children {
                text
              }
            }
            author {
              name
              _createdAt
            }
            mainImage {
              asset {
                altText
                url
              }
            }
            teaser
            slug {
              current
            }
          }
        }
      }
    `);

    result.data.allSanityPosts.nodes.forEach(node => {
        const slug = node.slug.current;

        createPage({
            path: `/${slug}`,
            component: path.resolve('./src/templates/PostTemplate.js'),
            context: {
                // Pass additional data to the template if needed
                // For example: node data or additional variables
                // can access these in the template as pageContext
                slug: slug,
            }
        })
    });
};