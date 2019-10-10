// Core
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// Custom Components
import VideoStart from './VideoStart';
import VideoModal from './VideoModal';

// Stylesheet
import styles from './index.module.scss';

const CaseStudySection = () => {
    const data = useStaticQuery(graphql`
        query {
            background: file(relativePath: { eq: "background/woolet-case-study.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    return (
        <BackgroundImage className={`${styles.container} section`} Tag="section" fluid={data.background.childImageSharp.fluid}>
            <div className={`${styles.containerInner} container`}>
                <VideoStart setIsModalOpen={setIsModalOpen}/>
                <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            </div>
        </BackgroundImage>
    );
};

export default CaseStudySection;
