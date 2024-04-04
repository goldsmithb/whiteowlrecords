import React, { useState, useEffect} from 'react';
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import BlogFeed from '../components/BlogFeed.js'
import Layout from '../components/layout.js'
import Owl from '../components/Owl.js'

const IndexPage = () => {
    const val = sessionStorage.getItem('hasOwlBeenShown');
    let hasOwlBeenShown = val === "true" ? true : false;
    // show the owl if it has not yet been shown
    const [showOwl, setShowOwl] = useState(!hasOwlBeenShown);

    return (
        <Layout showBanner={true}>
            {showOwl && <Owl setShowOwl={setShowOwl} />}
            <BlogFeed />
        </Layout>
    )
}

export const Head = () => <Seo/>

export default IndexPage