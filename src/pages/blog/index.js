import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {
    console.log(data)
  return (
    <Layout pageTitle="Blog Posts">
      {
        data.allSanityPost.nodes.map((node) => (
          <article key={node.id}>
            <h2>
                <Link to={`/blog/${node.slug.current}`}>{node.title}</Link>
            </h2>
            <p>Posted: {node.publishedAt}</p>
            <p>{node.slug.current}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
    allSanityPost(sort: {_createdAt: DESC}) {
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
        categories {
          title
        }
        id
        slug {
          current
        }
        title
        publishedAt(formatString: "YYYY.MM.DD")
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage