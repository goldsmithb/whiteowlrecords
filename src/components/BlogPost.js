import React from "react";
import ReactPlayer from "react-player/soundcloud";
import * as styles from "../styles/blogPostStyles.module.css";
import { PortableText } from "@portabletext/react";
import { fixIframeWidth } from "../utils.js";

const BlogPost = ({ post, postCount, isMobile }) => {
	const renderIframe = (iframeCode) => {
		return { __html: iframeCode };
	};

	if (isMobile) {
		return (
			<div className={styles.postMobile} id={"post_" + postCount}>
				<h1 className={styles.title}>{post.title}</h1>
				<div>{post?.author ? post.author.name + " |" : "" } {post.publishedAt}</div>
				<div className={styles.postBody}>
					{console.log(post?.bandCampIFrameBrowser)
					/* TODO: we need to render images too. see: https://www.sanity.io/answers/how-do-i-render-the-image-in-sanity-blockcontent-p1606357402185800 */}
					<PortableText value={post._rawBody} />
				</div>
				<div className={styles.playerContainer}>
					<div className={styles.playerMobile}>
						{post?.hasAudioPlayer === "Bandcamp" && (
							<div
								dangerouslySetInnerHTML={renderIframe(fixIframeWidth(post?.bandCampIFrameMobile))} />
						)}
						{post?.hasAudioPlayer === "SoundCloud" && (<ReactPlayer 
							controls={true}
							url={post?.soundCloudURL}
							width="100%"/>)}
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
							dangerouslySetInnerHTML={renderIframe(post?.bandCampIFrameBrowser)} />
					)}
					{post?.hasAudioPlayer === "SoundCloud" && (
						<ReactPlayer controls={true} url={post?.soundCloudURL} className={styles.reactPlayer}/>)}
				</div>
			</div>
		</div>
	);
};

export default BlogPost;