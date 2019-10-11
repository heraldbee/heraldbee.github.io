// Core
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// Custom Components
import Main from './Main';
import Aside from './Aside';

// Stylesheet
import styles from './index.module.scss';

const StatisticsSection = () => {
    const data = useStaticQuery(graphql`
        query {
            background: file(relativePath: { eq: "background/statistics.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <>  
            <section className={`${styles.container} section`}>
                <Main/>
            </section>
            <BackgroundImage className={`${styles.containerSpecial} section`} Tag="section" fluid={data.background.childImageSharp.fluid}>
                <Aside/>
            </BackgroundImage>
        </>
    );
};

export default StatisticsSection;