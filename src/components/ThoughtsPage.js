import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from '../styles/thoughtStyles.module.css'
import { PortableText } from '@portabletext/react'
import ReactPlayer from "react-player"

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
              id
              _rawBody
              mainImage {
                asset {
                  altText
                  url
                }
              }
              hasAudioPlayer
              soundCloudURL
              bandCampIFrame
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
    // React.useEffect(()=>{
    //     data.allSanityThoughtPost.nodes.map(post => {
    //         let newPost = (
    //             <div className={styles.post} id={"post_" + postCount}>
    //                     <h1 className={styles.title}>{post.title}</h1>
    //                     <div>{post.author.name} | {post.publishedAt}</div>
    //                     <PortableText
    //                         value={post._rawBody}
    //                     />
    //                     {post?.hasAudioPlayer === "Bandcamp" && renderIframe(post.bandCamp)}
    //                     {postCount += 1}
    //                 </div>
    //         );
    //         postsArray.push(newPost)
    //     })
    // });

    return (
        <div className={styles.container}>
      <main>
        <div >
        {data.allSanityThoughtPost.nodes.map(post => (
                    <div className={styles.post} id={"post_" + postCount}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <div>{post.author.name} | {post.publishedAt}</div>
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
  )
}

export default ThoughtsPage