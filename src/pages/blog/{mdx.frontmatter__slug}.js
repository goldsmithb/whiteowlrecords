import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import client from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

// // Get a pre-configured url-builder from your sanity client
// const builder = imageUrlBuilder(client)

// // Then we like to make a simple function like this that gives the
// // builder an image and returns the builder for you to specify additional
// // parameters:
// function urlFor(source) {
//   return builder.image(source)
// }

const BlogPost = ({data, children}) => {
    console.log(data)
    // const image = getImage(data.mdx.frontmatter.hero_image)
    // console.log(image)
  return (
    <div>Hello</div>
    // <Layout pageTitle={data.mdx.frontmatter.title}>
    // <Layout pageTitle="{data.mdx.frontmatter.title}">
    //   <p>Posted: {data.mdx.frontmatter.date}</p>
    //   {/* <img src={urlFor(person.image).width(200).url()} /> */}
    //   <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
    //   Photo Credit:{" "}
    //     <a href={data.mdx.frontmatter.hero_image_credit_link}>
    //       {data.mdx.frontmatter.hero_image_credit_text}
    //     </a>
    //   {children}
    // </Layout>
  )
}

export const Head = ({data}) => <Seo title="{data}" />

export const query = graphql`
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
      }
    }
  }
`



export default BlogPost