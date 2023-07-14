import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import SanityImage from "gatsby-plugin-sanity-image"
import {PortableText} from '@portabletext/react'

const SoundPost = ({data, children}) => {
    console.log(data)
    console.log(data.sanityThoughtPost)
    console.log(data.sanityThoughtPost.title)

    // const imageData = getGatsbyImageData(data.sanityThoughtPost.mainImage.asset)
  return (
    // <div>Hello!</div>
    <Layout pageTitle={data.sanityThoughtPost.title}>
    <SanityImage 
            // alt={data.sanityThoughtPost.Image.}
            asset={data.sanityThoughtPost.mainImage.asset}
        />
    <p>Author: {data.sanityThoughtPost.author.name}</p>
    <p>Posted: {data.sanityThoughtPost.publishedAt}</p>
      <div>
        {/* {data.sanityThoughtPost.body.map(block => {
            <PortableText 
                value={data.block}
            />
        })} */}
       
      </div>
      {children} 
    </Layout>
  )
}

export const Head = ({data}) => <Seo title="{data}" />

export const query = graphql`
  query SingleThoughtPost($id: String) {
    sanityThoughtPost(id: {eq: $id}) {
      author {
        name
      }
      id
      publishedAt(formatString: "YYYY.MM.DD")
      title
      mainImage {
        ...ImageWithPreview
      }
      body {
        children {
          text
        }
      }
    }
  }
`



export default SoundPost