// Core
import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Stylesheet
import styles from './index.module.scss';

const HeroImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholder: file(relativePath: { eq: "image-placeholder-350x350.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className="column is-6">
            <div className="section-media">
                <Img fluid={data.placeholder.childImageSharp.fluid}/>
                <p>Lorem Ipsum</p>
            </div>
        </div>
    );
};

export default HeroImage;