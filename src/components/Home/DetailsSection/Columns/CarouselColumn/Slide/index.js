// Core
import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image"

// Stylesheet
import styles from './index.module.scss';

const Slide = ({ img, activeTab, step }) => {

    const isActive = activeTab === step;

    return (
        <div className={`${styles.container} ${isActive ? styles.isActive : ''}`}>
            <Img className={styles.card} fluid={img}/>
        </div>
    );
};

Slide.propTypes = {
    img: PropTypes.object,
    activeTab: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
};

export default Slide;
