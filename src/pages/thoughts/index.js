import * as React from 'react'
// import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
// import { useEffect } from 'react'
import NavBar from '../../components/NavBar.js'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../../styles/thoughtStyles.module.css'
import BottomBar from '../../components/BottomBar.js'
import PortableText from "react-portable-text"
import { Helmet } from 'react-helmet'
// import SanityImage from "gatsby-plugin-sanity-image"


const BlogPage = ({data}) => {
    
  return (
    <>
    <NavBar />
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </Helmet>
    <header className={styles.banner}>
            <StaticImage 
                alt="WHITEOWLRECORDS banner"
                src="../../images/banner.png"
            />
        </header>
    <div className={styles.container}>
      <main>
        <div className={styles.feed}>
        {data.allSanityThoughtPost.nodes.map(post => (
                    <div className={styles.post}>
                        <h1 className={styles.title}>{post.title}</h1>
                        {/* <SanityImage 
                            // alt={data.sanityThoughtPost.Image.}
                            asset={post.mainImage.asset}
                        /> */}
                        <div>{post.author.name} | {post.publishedAt}</div>
                        <PortableText
                            content={post._rawBody}
                        />
                    </div>
                ))}
        </div>
      </main>
    </div>
    <BottomBar />
    </>
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
      _rawBody
    }
  }
}
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage