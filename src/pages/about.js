import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { PortableText } from '@portabletext/react'
import Layout from '../components/layout.js'

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
            <PortableText value={data.allSanityAboutPage.nodes[0]._rawBody} />
        </Layout>
    );
}

export default About