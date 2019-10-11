// Core
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Stylesheet
import styles from './index.module.scss';

const MediaColumn = () => {
    const data = useStaticQuery(graphql`
        query {
            mobilePresentation: file(relativePath: { eq: "customAssets/mobilePresentation.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className={`${styles.container} column is-12 is-4-desktop`}>
            <Img className={`${styles.image}`} fluid={data.mobilePresentation.childImageSharp.fluid} alt="Heraldbee Mobile UI"/>
        </div>
    );
};

export default MediaColumn;