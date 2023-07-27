import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import SanityImage from "gatsby-plugin-sanity-image"
import {PortableText} from '@portabletext/react'

const SoundPost = ({data, children}) => {
    console.log(data)
    console.log(data.sanitySoundPost)
    console.log(data.sanitySoundPost.title)

    // const imageData = getGatsbyImageData(data.sanitySoundPost.mainImage.asset)
  return (
    <div>Hello!</div>
    // <Layout pageTitle={data.sanitySoundPost.title}>
    // <SanityImage 
    //         // alt={data.sanitySoundPost.Image.}
    //         asset={data.sanitySoundPost.mainImage.asset}
    //     />
    // <p>Author: {data.sanitySoundPost.author.name}</p>
    // <p>Posted: {data.sanitySoundPost.publishedAt}</p>
    //   <div>
    //     {/* {data.sanitySoundPost.body.map(block => {
    //         <PortableText 
    //             value={data.block}
    //         />
    //     })} */}
       
    //   </div>
    //   {children} 
    // </Layout>
  )
}

export const Head = ({data}) => <Seo title="{data}" />

export const query = graphql`
  query SingleSoundPost($id: String) {
    sanitySoundPost(id: {eq: $id}) {
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