import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { useEffect } from 'react'
import * as styles from '../../styles/blogStyles.module.css'

const BlogPage = ({data}) => {

    useEffect(() => {
        document.body.classList.remove(`cream-background`);
        document.body.classList.add(`navy-background`);
    });


    console.log(data)
  return (
    <Layout pageTitle="Sounds">
        <div className={StyleSheet.container}>
            {
                data.allSanitySoundPost.nodes.map((node) => (
                <article className={styles.article} key={node.id}>
                {console.log(node)}
                    <h2>
                        <Link to={`/sounds/${node.slug.current}`}>{node.title}</Link>
                    </h2>
                    <p>Posted: {node.publishedAt}</p>
                    <p>{node.teaser}</p>
                </article>
                ))
            }
        </div>
      
    </Layout>
  )
}

export const query = graphql`
query AllSoundPosts {
    allSanitySoundPost(sort: {publishedAt: DESC}) {
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
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage