import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";
import MobileLayout from "../components/MobileLayout.js";
import VariableContext from "../context/VariableProvider.js";
import { PortableText } from "@portabletext/react";
import * as styles from "../styles/blogPostStyles.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Events = () => {
	const { isMobile } = useContext(VariableContext);
	const data = useStaticQuery(graphql`
    query {
        allSanityEventPost {
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
						const img = getImage(eventPost.image.asset.gatsbyImageData);
						return (
							<div className={styles.post} key={key++}>
								<div className={styles.image}>
									<GatsbyImage image={img} alt="Event Image" />
								</div>
								<div className={styles.postBody}>
									<PortableText value={eventPost._rawBody} />
								</div>
							</div>
						);})}
				</div>
			</MobileLayout>
		);
	}

	console.log(data);
	return (
		<Layout showBanner={false}>
			<div style={{ marginTop: "10vh" }}>
				{data.allSanityEventPost.nodes.map(eventPost => {
					const img = getImage(eventPost.image.asset.gatsbyImageData);
					return (
						<div className={styles.post} key={key++}>
							<div className={styles.image}>
								<GatsbyImage image={img} alt="Event Image" />
							</div>
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