import React from 'react'
import ReactPlayer from "react-player"
import * as styles from '../styles/blogPostStyles.module.css'
import { PortableText } from '@portabletext/react'

const fixIframeWidth = (iframeCode) => {
    console.log("RENDER I FRRAME")
    console.log(iframeCode)
    let widthPos = iframeCode.search("width: ");
    console.log (iframeCode.substring(widthPos));
    let pxPos = iframeCode.substring(widthPos).search("px");
    if (pxPos > 14) { 
        console.log("NOOOOPE") // wait for sanity to propogate
        return iframeCode }
    pxPos += widthPos;
    console.log(widthPos, pxPos)

    return iframeCode.substring(0, widthPos + 7) + "100%" + iframeCode.substring(pxPos + 2);
}

const BlogPost = ({ post, postCount, isMobile }) => {
    const renderIframe = (iframeCode) => {
        return { __html: fixIframeWidth(iframeCode) };
    };

    const renderReactPlayer = (url) => {
        return (
                <ReactPlayer 
                controls={true}
                url={url}/>);
    };

    if (isMobile) {
        return (
            <div className={styles.postMobile} id={"post_" + postCount}>
                <h1 className={styles.title}>{post.title}</h1>
                <div>{post?.author ? post.author.name + " |" : "" } {post.publishedAt}</div>
                <div className={styles.postBody}>
                    <PortableText value={post._rawBody} />
                </div>
                <div className={styles.playerContainer}>
                    <div className={styles.playerMobile}>
                        {post?.hasAudioPlayer === "Bandcamp" && (
                            <div
                                dangerouslySetInnerHTML={renderIframe(post?.bandCampIFrame)} />
                        )}
                        {post?.hasAudioPlayer === "SoundCloud" && renderReactPlayer(post?.soundCloudURL)}
                    </div>
                </div>
            </div>
      );
    }

    return (
        <div className={styles.post} id={"post_" + postCount}>
            <h1 className={styles.title}>{post.title}</h1>
            <div>{post?.author ? post.author.name + " |" : "" } {post.publishedAt}</div>
            <div className={styles.postBody}>
                <PortableText value={post._rawBody} />
            </div>
            <div className={styles.playerContainer}>
                <div className={styles.player}>
                    {post?.hasAudioPlayer === "Bandcamp" && (
                        <div
                            dangerouslySetInnerHTML={renderIframe(post?.bandCampIFrame)} />
                    )}
                    {post?.hasAudioPlayer === "SoundCloud" && renderReactPlayer(post?.soundCloudURL)}
                </div>
            </div>
        </div>
  );
}

export default BlogPost;