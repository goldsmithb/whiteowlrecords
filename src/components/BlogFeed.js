import * as React from 'react'
import ReactPlayer from "react-player"
import { useStaticQuery, graphql } from "gatsby";
import * as styles from '../styles/thoughtStyles.module.css'
import { PortableText } from '@portabletext/react'

const BlogFeed = () => {
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

    const renderIframe = (iframeCode) => {
        return { __html: iframeCode };
    };

    const renderReactPlayer = (url) => {
        return <ReactPlayer 
            controls={true}
            url={url}/>
    };

    let postCount = 0;
    return (
        <div className={styles.container}>
      <main>
        <div >
        {data.allSanityBlogPost.nodes.map(post => (
                    <div className={styles.post} id={"post_" + postCount}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <div>{post?.author ? post.author.name + " |" : "" } {post.publishedAt}</div>
                        <PortableText
                            value={post._rawBody}
                        />
                        {post?.hasAudioPlayer === "Bandcamp" && (
                            <div
                                dangerouslySetInnerHTML={renderIframe(post?.bandCampIFrame)} />
                        )}
                        {post?.hasAudioPlayer === "SoundCloud" && renderReactPlayer(post?.soundCloudURL)
                            }
                    </div>
                ))}
        </div>
      </main>
    </div>
  );
}

export default BlogFeed