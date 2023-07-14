import * as React from 'react'
// import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import NavBar from '../components/NavBar.js'


const IndexPage = () => {
  return (

<>
    <NavBar />
    <p>.</p>
    <StaticImage style={{margin: "50px"}}
        alt="WHITEOWLRECORDS banner"
        src="../images/banner.png"
    />
</>
     
  )
}

export const Head = () => <Seo title="WHITEOWLRECORDS WELCOMES YOU =)"/>

export default IndexPage