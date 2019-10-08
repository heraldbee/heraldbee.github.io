// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Custom Components
import Controls from './Controls';

// Stylesheet
import styles from './index.module.scss';

const BurgerMenu = ({ isOpen }) =>
    <div className={`${styles.container} navbar-menu navbar-end ${isOpen ? 'is-active' : null}`}>
        <Link className={`${styles.containerItem} navbar-item`}>Strona Główna</Link>
        <Link className={`${styles.containerItem} navbar-item`}>Nasza Historia</Link>
        <Link className={`${styles.containerItem} navbar-item`}>Cennik</Link>
        <Link className={`${styles.containerItem} navbar-item`}>Blog</Link>
        
        <Controls />
    </div>

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

export default BurgerMenu;