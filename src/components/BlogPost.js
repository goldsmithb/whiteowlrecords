import * as React from 'react'
import ReactPlayer from "react-player"
import * as styles from '../styles/blogPostStyles.module.css'
import { PortableText } from '@portabletext/react'

const BlogPost = ({ post, postCount }) => {
    const renderIframe = (iframeCode) => {
        return { __html: iframeCode };
    };

    const renderReactPlayer = (url) => {
        return <ReactPlayer 
            controls={true}
            url={url}/>
    };
    return (
        <div className={styles.post} id={"post_" + postCount}>
            <h1 className={styles.title}>{post.title}</h1>
            <div>{post?.author ? post.author.name + " |" : "" } {post.publishedAt}</div>
            <div className={styles.postBody}>
                <PortableText value={post._rawBody} />
            </div>
            {post?.hasAudioPlayer === "Bandcamp" && (
                <div
                    dangerouslySetInnerHTML={renderIframe(post?.bandCampIFrame)} />
            )}
            {post?.hasAudioPlayer === "SoundCloud" && renderReactPlayer(post?.soundCloudURL)
                }
        </div>
  );
}

export default BlogPost;