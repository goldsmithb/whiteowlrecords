import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../components/textStyles.css'



const AboutPage = () => {
  return (
    <Layout pageTitle="CONTACT WHITE OWL RECORDS">
        <div style={{marginLeft: "10vw"}}>
            <p><strong>White Owl Records</strong> is a record label based in Brooklyn, NY.</p>
            <p>You can contact us at: <strong><a href="mailto:contact@whiteowlrecords.xyz">contact@whiteowlrecords.xyz</a></strong></p>
        </div>
    </Layout>
  )
}
export const Head = () => <Seo title="About Page" />

export default AboutPage