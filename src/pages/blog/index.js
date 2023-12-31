import * as React from 'react'
// import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
    console.log(data)
  return (
    <div>hey</div>
    // <Layout pageTitle="Blog Posts">
    //   {
    //     data.allSanitySoundPost.nodes.map((node) => (
    //       <article key={node.id}>
    //         <h2>
    //             <Link to={`/blog/${node.slug.current}`}>{node.title}</Link>
    //         </h2>
    //         <p>Posted: {node.publishedAt}</p>
    //         <p>{node.slug.current}</p>
    //       </article>
    //     ))
    //   }
    // </Layout>
  )
}

export const query = graphql`
query AllPostsAllKinds {
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
        id
      }
    }
    allSanitySoundPost(sort: {publishedAt: DESC}) {
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
        id
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage