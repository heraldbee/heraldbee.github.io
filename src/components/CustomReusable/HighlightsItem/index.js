// Core
import React from 'react';
import PropTypes from 'prop-types';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Stylesheet
import styles from './index.module.scss';

const HighlightsItem = ({ isReversed, icon, title, description, didAppear, delay }) => {

    const adjustedActiveCSSClass = `container${delay}`;

    return (
        <div className={`${styles[adjustedActiveCSSClass]} ${didAppear ? styles.didAppear : ''} ${isReversed ? styles.reversed : ''}`}>
            <FontAwesomeIcon className={`${styles.icon} ${isReversed ? styles.iconReversed : ''}`} icon={icon}/>
            <div className={`${styles.content}`}>
                <h3 className={`${styles.contentTitle} title is-family-secondary is-size-5`}>{title}</h3>
                <p className={`${styles.contentDescription} is-size-6`}>{description}</p>
            </div>
        </div>
    ); 
};

HighlightsItem.propTypes = {
    isReversed: PropTypes.bool,
    icon: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    didAppear: PropTypes.bool,
    delay: PropTypes.number.isRequired
};

export default HighlightsItem;