import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";
import MobileLayout from "../components/MobileLayout.js";
import VariableContext from "../context/VariableProvider.js";
import { PortableText } from "@portabletext/react";
import * as styles from "../styles/eventsPageStyles.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Helper function to determine if an event post should include an image
// returns:
//   hasImage: bool
//   image: jsx component
const renderGatsbyImageIfPresent = (eventPost) => {
	let image = eventPost.image;
	console.log("evetpos t ");
	console.log(image);
	if (image === null) {
		return {
			hasImage: false,
		}; 
	}
	image = getImage(eventPost.image.asset.gatsbyImageData);
	return {
		hasImage: true, 
		image: (
			<div className={styles.image}>
				<GatsbyImage image={image} alt="Event Image" />
			</div>
		)
	};
};

const Events = () => {
	const { isMobile } = useContext(VariableContext);
	const data = useStaticQuery(graphql`
    query {
		allSanityEventPost(sort: {eventDate: DESC}) {
		  nodes {
			_rawBody
			image {
			  asset {
				gatsbyImageData
			  }
			}
		  }
		}
	  }
    `);
	let key = 0;

	if (isMobile) {
		return (
			<MobileLayout>
				<div style={{ marginTop: "10vh" }} key={key++}>
					{data.allSanityEventPost.nodes.map(eventPost => {
						const {hasImage, image} = renderGatsbyImageIfPresent(eventPost);
						return (
							<div className={styles.post} key={key++}>
								{hasImage && image}
								<div className={styles.postBody}>
									<PortableText value={eventPost._rawBody} />
								</div>
							</div>
						);})}
				</div>
			</MobileLayout>
		);
	}

	return (
		<Layout showBanner={false}>
			<div style={{ marginTop: "10vh" }}>
				{data.allSanityEventPost.nodes.map(eventPost => {
					const {hasImage, image} = renderGatsbyImageIfPresent(eventPost);
					return (
						<div className={styles.post} key={key++}>
							{hasImage && image}
							<div className={styles.postBody}>
								<PortableText value={eventPost._rawBody} />
							</div>
						</div>
					);})}
			</div>
		</Layout>
	);
};

export default Events;