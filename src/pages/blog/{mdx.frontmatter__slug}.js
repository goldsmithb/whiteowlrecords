import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data, children}) => {
    console.log(data.mdx.frontmatter.hero_image)
    const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      {children}
    </Layout>
  )
}

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export const query = graphql`
query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM.DD.YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`



export default BlogPost