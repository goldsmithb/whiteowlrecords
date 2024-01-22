import * as React from 'react'
import ReactPlayer from "react-player"
import { useStaticQuery, graphql } from 'gatsby'
import { PortableText } from '@portabletext/react'
import * as styles from '../styles/soundStyles.module.css'

const SoundsPage = () => {
    const isBrowser = typeof window !== "undefined";
    let isMobile  = true;
    if (isBrowser) {
        isMobile =  window.innerWidth <= 768;
    }

    let postCount = 0;
    const renderIframe = (iframeCode) => {
        return { __html: iframeCode };
    };
    const renderReactPlayer = (url) => {
        return <ReactPlayer 
            controls={true}
            url={url}/>
    };

    const data = useStaticQuery(graphql`
    query {
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


    console.log(data)

  return (
    <React.Fragment>
        <div >
        {data.allSanitySoundPost.nodes.map(post => (
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
        <div className={styles.playersContainer}>
            <div className={styles.player}>
                { isMobile ? (
                    <iframe 
                        className={styles.mobilePlayer} 
                        src="https://bandcamp.com/EmbeddedPlayer/album=3142640843/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
                        seamless
                        title='Twnenty Over EP - Drim'
                    >
                            <a href="https://drimaudio.bandcamp.com/album/twenty-over-ep">Twenty over EP by Drim</a>
                    </iframe>
                ) :
                (
                    <ReactPlayer
                        controls={true}
                        url="https://soundcloud.com/drim-audio/sets/twenty-over-ep"
                    />
                )}
            <p className={styles.buyLinkWrapper}><a className={styles.linkText} target="_blank" href='https://drimaudio.bandcamp.com/album/twenty-over-ep'>Bandcamp</a></p>
            </div>
            <div className={styles.player}>
                { isMobile ? (
                    <iframe className={styles.mobilePlayer} 
                    src="https://bandcamp.com/EmbeddedPlayer/album=1735788970/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/" 
                    seamless
                    title='Gaurdian Angel Language Barrier - Piner'
                    >
                        <a href="https://pineraudio.bandcamp.com/album/guardian-angel-language-barrier">Guardian Angel Language Barrier by Piner</a>
                        </iframe>
                ) :
                (
                    <ReactPlayer 
                        controls={true}
                        url="https://soundcloud.com/jack-cavenaugh/sets/guardian-angel-language-barrier"
                    />
                )}
            <p className={styles.buyLinkWrapper}><a className={styles.linkText} target="_blank" href='https://drimaudio.bandcamp.com/album/twenty-over-ep'>Bandcamp</a></p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SoundsPage