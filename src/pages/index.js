import * as React from 'react'
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import BlogFeed from '../components/BlogFeed.js'
import Layout from '../components/layout.js'

const IndexPage = () => { 
  return (
    <Layout showBanner={true}>
        <BlogFeed />
    </Layout>

     
  )
}

export const Head = () => <Seo/>

export default IndexPage