// Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Stylesheet
import styles from './index.module.scss';

const MediaColumn = ({ isVisible }) => {
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

    const [ didAppear, setDidAppear ] = useState(false);

    useEffect(() => {
        if (isVisible && !didAppear) {
            setDidAppear(true);
        }
    }, [ isVisible, didAppear ]);

    return (
        <div className={`${styles.container} ${didAppear ? styles.isVisible : ''} column is-12 is-4-desktop`}>
            <Img className={`${styles.image}`} fluid={data.mobilePresentation.childImageSharp.fluid} alt="Heraldbee Mobile UI"/>
        </div>
    );
};

MediaColumn.propTypes = {
    isVisible: PropTypes.bool
};

export default MediaColumn;