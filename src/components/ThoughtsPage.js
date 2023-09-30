import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/thoughtStyles.module.css'
import PortableText from "react-portable-text"
// import SanityImage from "gatsby-plugin-sanity-image"


const ThoughtsPage = () => {
    const data = useStaticQuery(graphql`
    query {
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
    `);

    return (
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
        // <StaticQuery
        //     query={myQuery}
        //     render={(data) => {
        //         <div>
        //         HELLO
        //         <PortableText content={data.allSanityThoughtPost.nodes[0]._rawBody}></PortableText>
        //         <div className={styles.container}>
        //         <main>
        //             <div className={styles.feed}>
        //             {data.allSanityThoughtPost.nodes.map(post => (
        //                         <div className={styles.post}>
        //                             <h1 className={styles.title}>{post.title}</h1>
        //                             <div>{post.author.name} | {post.publishedAt}</div>
        //                             <PortableText
        //                                 content={post._rawBody}
        //                             />
        //                         </div>
        //                     ))}
        //             </div>
        //         </main>
        //         </div>
        //         </div>
        //     }}
        // />
  )
}

export default ThoughtsPage
/* <SanityImage 
// alt={data.sanityThoughtPost.Image.}
asset={post.mainImage.asset}
/> */