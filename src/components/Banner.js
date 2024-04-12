import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/BannerStyles.module.css";

const Banner = ({ isMobile }) => {
	const data = useStaticQuery(graphql`
    query {
        allFile {
          edges {
            node {
              childImageSharp {
                gatsbyImageData
              }
              relativePath
            }
          }
        }
      }
    `);
	let imgSource = isMobile ? "banner-mobile.png" : "banner.png";
	const ban = data.allFile.edges.find((el) => el.node.relativePath === imgSource).node;
	if (isMobile) {
		return (
			<GatsbyImage 
				image={getImage(ban)}
				alt="WHITEOWLRECORDS banner"
			/>
		);
	}


	return (
		<div className={styles.banner}>
			<GatsbyImage 
				image={getImage(ban)}
				alt="WHITEOWLRECORDS banner"
			/>
		</div>
	);
};

export default Banner;