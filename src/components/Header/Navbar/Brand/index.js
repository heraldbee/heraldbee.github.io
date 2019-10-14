// Core
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from '../../../../images/logo_hb_full.png';

// Stylesheet
import styles from './index.module.scss';

const Brand = ({ isActive, onToggle }) => 
    <div className="navbar-brand">
        <a className={`${styles.imageContainer} navbar-item`} href="https://heraldbee.com">
            <img className={styles.imageContent} src={logo} alt="Heraldbee Logo"/>
        </a>

        <div 
            role="button" 
            className={`navbar-burger burger ${isActive? 'is-active' : null}`} 
            aria-label="menu" 
            aria-expanded={isActive} 
            onClick={onToggle}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>

Brand.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default Brand;