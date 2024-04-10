import React, { useContext } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { PortableText } from '@portabletext/react'
import Layout from '../components/layout.js'
import MobileLayout from '../components/MobileLayout.js'
import BottomBar from '../components/BottomBar.js'
import * as styles from '../styles/aboutStyles.module.css'
import VariableContext from '../context/VariableProvider.js';

const About = () => {
    const { isMobile } = useContext(VariableContext);
    const data = useStaticQuery(graphql`
    query {
        allSanityAboutPage {
            nodes {
              _rawBody
            }
          }
        }
    `);

    if (isMobile) {
        return (
            <MobileLayout>
                <div className={styles.Mobile}>
                    <PortableText value={data.allSanityAboutPage.nodes[0]._rawBody} />
                </div>
                <BottomBar isMobile={true} />
            </MobileLayout>
        )
    }
    return (
        <Layout>
            <div className={styles.container}>
                <PortableText value={data.allSanityAboutPage.nodes[0]._rawBody} />
            </div>
        </Layout>
    );
}

export default About