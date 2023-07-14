import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import Image from "gatsby-plugin-sanity-image"


const SoundPost = ({data, children}) => {
    console.log(data)
  return (
    // <div>Hello!</div>
    <Layout pageTitle={data.allSanitySoundPost.title}>
      <p>Posted: {data.publishedAt}</p>

      Photo Credit:{" "}
        {/* <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a> */}
      {children} 
    </Layout>
  )
}

export const Head = ({data}) => <Seo title="{data}" />

export const query = graphql`
query AllSoundsPosts {
    allSanitySoundPost {
      nodes {
        title
        publishedAt
      }
    }
  }
`



export default SoundPost