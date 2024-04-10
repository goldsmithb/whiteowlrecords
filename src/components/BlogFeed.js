import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import * as styles from '../styles/blogFeedStyles.module.css'
import BlogPost from './BlogPost';

const BlogFeed = ({ isMobile }) => {
    const data = useStaticQuery(graphql`
    query {
        allSanityBlogPost(sort: {publishedAt: DESC}) {
            nodes {
              title
              publishedAt(formatString: "YYYYY.MM.DD")
              _rawBody
              id
              mainImage {
                asset {
                  altText
                  url
                }
              }
              soundCloudURL
              bandCampIFrame
              hasAudioPlayer
              author {
                name
              }
            }
          }
        }
    `);
    let postCount = 0;

    if (isMobile) {
        return (
            <div className={styles.containerMobile}>
                <main>
                    <div>
                        {data.allSanityBlogPost.nodes.map(post => (
                            <BlogPost post={post} postCount={postCount++} isMobile={true} />
                            )
                        )}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <main>
                <div>
                    {data.allSanityBlogPost.nodes.map(post => (
                        <BlogPost post={post} postCount={postCount++} />
                        )
                    )}
                </div>
            </main>
        </div>
    );
}

export default BlogFeed