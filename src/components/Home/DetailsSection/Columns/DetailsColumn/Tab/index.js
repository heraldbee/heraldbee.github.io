// Core
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import styles from './index.module.scss';

const Tab = ({ step, activeTab, setActiveTab, title, description }) => {

    const isActive = step === activeTab;

    const onClick = () => {
        setActiveTab(step);
    };

    return (
        <li className={`${styles.container} ${isActive ? styles.isActive : ''}`}>
            <div onClick={onClick} role="button" className={styles.tabsElement}>
                <h3 className={`${styles.title} title is-family-secondary is-size-6`}>{title}</h3>
                <p className={`${styles.description} subtitle is-size-6`}>{description}</p>
            </div>
        </li>
    );
};

Tab.propTypes = {
    step: PropTypes.number.isRequired,
    activeTab: PropTypes.number.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Tab;


