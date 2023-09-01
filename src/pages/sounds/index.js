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

const BlogPage = ({data}) => {
    console.log(data)
  return (
    <React.Fragment>
        <NavBar />
        <header className={styles.banner}>
            <StaticImage 
                alt="WHITEOWLRECORDS banner"
                src="../../images/banner.png"
            />
        </header>
        <div  className={styles.homePage}>
            {/* <div className={styles.banner}>
                <StaticImage 
                    alt="WHITEOWLRECORDS banner"
                    src="../images/banner.png"
                />
            </div> */}
            <div className={styles.playerContainer}>
                <div className={styles.player}>
                    <iframe className={styles.bandCampPlayer} src="https://bandcamp.com/EmbeddedPlayer/album=3142640843/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless>
                        <a href="https://drimaudio.bandcamp.com/album/twenty-over-ep">Twenty over EP by Drim</a>
                    </iframe>
                <p className={styles.buyLink}><a href='https://drimaudio.bandcamp.com/album/twenty-over-ep'>^^^^^^^^^Purchase on BandCamp^^^^^^^^^</a></p>
                </div>
                <div className={styles.player}>
                    {/* <ReactPlayer 
                        controls="true"
                        url="https://soundcloud.com/jack-cavenaugh/sets/guardian-angel-language-barrier"
                    /> */}

                <iframe className={styles.bandCampPlayer} src="https://bandcamp.com/EmbeddedPlayer/album=1735788970/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless>
                    <a href="https://pineraudio.bandcamp.com/album/guardian-angel-language-barrier">Guardian Angel Language Barrier by Piner</a>
                </iframe>
                <p className={styles.buyLink}><a href='https://pineraudio.bandcamp.com/album/guardian-angel-language-barrier '>^^^^^^^^^Purchase on BandCamp^^^^^^^^^</a></p>
                </div>
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