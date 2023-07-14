import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {
    console.log(data)
  return (
    <Layout pageTitle="Thoughts">
      {
        data.allSanityThoughtPost.nodes.map((node) => (
          <article style={{marginLeft: "10vw"}} key={node.id}>
            <h2>
                <Link to={`/thoughts/${node.slug.current}`}>{node.title}</Link>
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
query AllThoughtPosts {
  allSanityThoughtPost(sort: {publishedAt: DESC}) {
    nodes {
      title
      publishedAt(formatString: "YYYY.MM.DD")
      body {
        children {
          text
        }
      }
      author {
        name
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
    }
  }
}
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage