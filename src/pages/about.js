import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { PortableText } from '@portabletext/react'
import Layout from '../components/layout.js'
import * as styles from '../styles/aboutStyles.module.css'

const About = () => {
    const data = useStaticQuery(graphql`
    query {
        allSanityAboutPage {
            nodes {
              _rawBody
            }
          }
        }
    `);
    return (
        <Layout>
            <div className={styles.container}>
                <PortableText value={data.allSanityAboutPage.nodes[0]._rawBody} />
            </div>
        </Layout>
    );
}

export default About