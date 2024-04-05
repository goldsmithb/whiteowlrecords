import React, { useState, useEffect} from 'react';
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import { Helmet } from 'react-helmet'
import BlogFeed from '../components/BlogFeed.js'
import Layout from '../components/layout.js'
import MobileLayout from '../components/MobileLayout.js'

const IndexPage = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    const isMobile = width <= 768;

    if (isMobile) {
        return (
            <div>
                <MobileLayout>
                    <BlogFeed />
                </MobileLayout>
            </div>
        )
    }

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Helmet>
            <Layout showBanner={true}>
                <BlogFeed />
            </Layout>
        </>
    );
}

export const Head = () => <Seo/>

export default IndexPage