// Core
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Custom Modules
import { extractImgArrayFromDataCluster } from '../../../../../utils/DetailsCarousel';

// Custom Components
import Slide from './Slide';

// Stylesheet
import styles from './index.module.scss';

const CarouselColumn = ({ activeTab }) => {
    const data = useStaticQuery(graphql`
        query {
            slide1: file(relativePath: { eq: "placeholder/slide-placeholder1.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 450) {
                            ...GatsbyImageSharpFluid
                    }
                }
            }
            slide2: file(relativePath: { eq: "placeholder/slide-placeholder2.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 450) {
                            ...GatsbyImageSharpFluid
                    }
                }
            }
            slide3: file(relativePath: { eq: "placeholder/slide-placeholder3.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 450) {
                            ...GatsbyImageSharpFluid
                    }
                }
            }
            slide4: file(relativePath: { eq: "placeholder/slide-placeholder4.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 450) {
                            ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const images = extractImgArrayFromDataCluster(data);
    
    return (
        <article className={`${styles.container} column is-6 is-hidden-mobile align-self-stretch`}>
            {
                images.map((image, i) =>
                    <Slide key={i} img={image} activeTab={activeTab} step={i+1}/>
                )
            }
        </article>
    );
};

export default CarouselColumn;