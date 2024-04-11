import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";
import MobileLayout from "../components/MobileLayout.js";
import VariableContext from "../context/VariableProvider.js";
import { PortableText } from "@portabletext/react";
import BlogPost from "../components/BlogPost.js";
import * as styles from "../styles/blogPostStyles.module.css";

const Events = () => {
	const { isMobile } = useContext(VariableContext);
	const data = useStaticQuery(graphql`
    query {
        allSanityEventPost {
            nodes {
              _rawBody
            }
          }
        }
    `);

	if (isMobile) {
		return (
			<MobileLayout>
				<div style={{ marginTop: "10vh" }}>
					{data.allSanityEventPost.nodes.map(eventPost => (
						<div className={styles.post}>
							<div className={styles.postBody}>
								<PortableText value={eventPost._rawBody} />
							</div>
						</div>
					))}
				</div>
			</MobileLayout>
		);
	}
	return (
		<Layout showBanner={false}>
			<div style={{ marginTop: "10vh" }}>
				{data.allSanityEventPost.nodes.map(eventPost => (
					<div className={styles.post}>
						<div className={styles.postBody}>
							<PortableText value={eventPost._rawBody} />
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Events;