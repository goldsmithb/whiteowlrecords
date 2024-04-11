import React, { useContext } from "react";
import Seo from "../components/seo";
import "../styles/globalStyles.css";
import { Helmet } from "react-helmet";
import BlogFeed from "../components/BlogFeed.js";
import Layout from "../components/layout.js";
import MobileLayout from "../components/MobileLayout.js";
import Banner from "../components/Banner.js";
import VariableContext from "../context/VariableProvider.js";

const IndexPage = () => {
	const { isMobile } = useContext(VariableContext);

	if (isMobile) {
		return (
			<div>
				<Helmet>
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
				</Helmet>
				<MobileLayout showBanner={true}>
					<BlogFeed isMobile={true}/>
				</MobileLayout>
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
			</Helmet>
			<Layout showBanner={true}>
				<Banner isMobile={false} />
				<BlogFeed />
			</Layout>
		</>
	);
};

export const Head = () => <Seo/>;

export default IndexPage;