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
// import SanityImage from "gatsby-plugin-sanity-image"


const BlogPage = ({data}) => {
    let leftChildren = [];
    let rightChildren = [];
    let count = 0;
    let i = 0;
    let j = 0;
    data.allSanityThoughtPost.nodes.map((node) => {
        console.log(count);
        if (count % 2 == 0) {
            leftChildren[i++] = node;
        } else {
            rightChildren[j++] = node;
        }
        count += 1;
    });
    console.log(data)
  return (
    <>
    <NavBar />
    <header className={styles.banner}>
            <StaticImage 
                alt="WHITEOWLRECORDS banner"
                src="../../images/banner.png"
            />
        </header>
    <div className={styles.container}>
      <main>
        <div className={styles.row}>
            <div className={styles.column}>
                {leftChildren.map(post => (
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

            <div className={styles.column}>
                {rightChildren.map(post => (
                    <div className={styles.post}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <div>{post.author.name} | {post.publishedAt}</div>
                        <PortableText
                            content={post._rawBody}
                        />
                    </div>
                ))}
            </div>
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