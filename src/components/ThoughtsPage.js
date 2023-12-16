import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from '../styles/thoughtStyles.module.css'
import {PortableText} from '@portabletext/react'

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
        <div >
        {data.allSanityThoughtPost.nodes.map(post => (
                    <div className={styles.post}>
                        <h1 className={styles.title}>{post.title}</h1>
                        {
                        /* <SanityImage 
                            // alt={data.sanityThoughtPost.Image.}
                            asset={post.mainImage.asset}
                        /> */}
                        <div>{post.author.name} | {post.publishedAt}</div>
                        <PortableText
                            value={post._rawBody}
                        />
                    </div>
                ))}
        </div>
      </main>
    </div>
  )
}

export default ThoughtsPage