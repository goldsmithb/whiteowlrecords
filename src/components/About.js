import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { PortableText } from '@portabletext/react'

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
        console.log(data)
    return (
        <PortableText value={data.allSanityAboutPage.nodes[0]._rawBody} />
    );
}

export default About