// Core
import React from 'react';
import PropTypes from 'prop-types';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Stylesheet
import styles from './index.module.scss';

const HighlightsItem = ({ isReversed, icon, title, description }) =>
    <div className={`${styles.container} ${isReversed ? styles.containerReversed : ''}`}>
        <FontAwesomeIcon className={`${styles.icon} ${isReversed ? styles.iconReversed : ''}`} icon={icon}/>
        <div className={`${styles.content}`}>
            <h3 className={`${styles.contentTitle} title is-family-secondary is-size-5`}>{title}</h3>
            <p className={`${styles.contentDescription} is-size-6`}>{description}</p>
        </div>
    </div>

HighlightsItem.propTypes = {
    isReversed: PropTypes.bool,
    icon: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string
};

export default HighlightsItem;