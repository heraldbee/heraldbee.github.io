// Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Third-Party Modules
import { useCountUp }from 'react-countup';

// Stylesheet
import styles from './index.module.scss';

const StatItem = ({ isVisible, stat, description }) => {
    
    const [ counterDidStart, setCounterDidStart ] = useState(false);

    const { countUp, start } = useCountUp({
        start: 0,
        end: stat,
        delay: 1000,
        duration: 3,
    });

    useEffect(() => {
        if (isVisible && !counterDidStart) {
            setCounterDidStart(true);
            start();
        }
    }, [ isVisible ]);

    return (
        <article className={`${styles.container} column is-6 is-3-widescreen`}>
            <h2 className={`${styles.stat} title is-primary is-size-1`}>{countUp}</h2>
            <p className={`${styles.description}`}>{description}</p>
        </article>
    );
};

StatItem.propTypes = {
    isVisible: PropTypes.bool,
    stat: PropTypes.number,
    description: PropTypes.string
};

export default StatItem;