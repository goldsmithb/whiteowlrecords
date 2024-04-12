import React, { useContext } from "react";
import VariableContext from "../context/VariableProvider.js";
import { useStaticQuery, graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import Layout from "../components/layout.js";
import MobileLayout from "../components/MobileLayout.js";
import BottomBar from "../components/BottomBar.js";
import * as styles from "../styles/aboutStyles.module.css";

const About = () => {
	const { isMobile } = useContext(VariableContext);
	// The first node will always be what we are looking for; there is only one about page, after all.
	const aboutPostIndex = 0 ;
	const data = useStaticQuery(graphql`
    query {
        allSanityAboutPage {
            nodes {
              _rawBody
            }
          }
        }
    `);

	if (isMobile) {

		if (data.allSanityAboutPage.nodes.length == 0) {
			return (<MobileLayout></MobileLayout>);
		}

		return (
			<MobileLayout>
				<div className={styles.containerMobile}>
					<div className={styles.postMobile}>
						<PortableText value={data.allSanityAboutPage.nodes[aboutPostIndex]._rawBody} />
					</div>
				</div>
				<BottomBar isMobile={true} />
			</MobileLayout>
		);
	}

	if (data.allSanityAboutPage.nodes.length == 0) {
		return (<Layout></Layout>);
	}

	return (
		<Layout>
			<div className={styles.container}>
				<PortableText value={data.allSanityAboutPage.nodes[aboutPostIndex]._rawBody} />
			</div>
		</Layout>
	);
};

export default About;