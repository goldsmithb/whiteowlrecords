import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.slug}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      pageInfo {
        perPage
      }
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage