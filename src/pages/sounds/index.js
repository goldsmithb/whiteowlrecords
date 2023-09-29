import * as React from 'react'
// import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import { useEffect } from 'react'
import NavBar from '../../components/NavBar.js'
import BottomBar from '../../components/BottomBar.js'
import ReactPlayer from "react-player"
// import * as styles from '../../styles/blogStyles.module.css'
import * as styles from '../../styles/soundStyles.module.css'
// import { PortableText } from '@portabletext/react'
import { Helmet } from 'react-helmet';

const BlogPage = ({data}) => {
    console.log(data)
  return (
    <React.Fragment>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Helmet>
        <NavBar />
        <header className={styles.banner}>
            <StaticImage 
                alt="WHITEOWLRECORDS banner"
                src="../../images/banner.png"
            />
        </header>
        {/* <div className={styles.banner}>
            <StaticImage 
                alt="WHITEOWLRECORDS banner"
                src="../images/banner.png"
            />
        </div> */}
        <div className={styles.playersContainer}>
            <div className={styles.player}>
                <ReactPlayer
                    controls="true"
                    url="https://soundcloud.com/drim-audio/sets/twenty-over-ep"
                    playing="true"
                />
            <p className={styles.buyLinkWrapper}><a className={styles.linkText} target="_blank" href='https://drimaudio.bandcamp.com/album/twenty-over-ep'>Bandcamp</a></p>
            </div>
            <div className={styles.player}>
                <ReactPlayer 
                    controls="true"
                    url="https://soundcloud.com/jack-cavenaugh/sets/guardian-angel-language-barrier"
                />
            <p className={styles.buyLinkWrapper}><a className={styles.linkText} target="_blank" href='https://pineraudio.bandcamp.com/album/guardian-angel-language-barrier '>Bandcamp</a></p>
            </div>
        </div>
        <BottomBar />
    </React.Fragment>
  )
}

export const query = graphql`
query AllSoundPosts {
    allSanitySoundPost(sort: {publishedAt: DESC}) {
      nodes {
        title
        body {
          style
          children {
            text
          }
        }
        author {
          name
        }
        mainImage {
          asset {
            url
          }
        }
        teaser
        categories {
          title
        }
        _rawBody
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage