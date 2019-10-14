// Core
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Stylesheet
import styles from './index.module.scss';

const SharedColumn = ({ img, title, description }) =>
    <article className={`column is-4`}>
        <Img fixed={img}/>
        <hr className="spacer is-1"/>
        <h3 className="title is-family-secondary is-size-4 is-spaced">{title}</h3>
        <p className={`${styles.text} subtitle is-size-6 is-size-5-desktop`}>{description}</p>
    </article>

SharedColumn.propTypes = {
    img: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default SharedColumn;