// Core
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Custom Modules
import { LocaleContext } from '../../../../../context/LocaleContext';

// Custom Components
import Controls from './Controls';

// Stylesheet
import styles from './index.module.scss';

const BurgerMenu = ({ isOpen }) => {

    const { language } = useContext(LocaleContext);

    return (
        <div className={`${styles.container} navbar-menu navbar-end ${isOpen ? 'is-active' : null}`}>
            <Link to={`/${language}`} activeClassName="is-active" className={`${styles.containerItem} navbar-item`}>Strona Główna</Link>
            <Link to={`/${language}/our-story`} activeClassName="is-active" className={`${styles.containerItem} navbar-item`}>Nasza Historia</Link>
            <Link to={`/${language}/pricing`} activeClassName="is-active" className={`${styles.containerItem} navbar-item`}>Cennik</Link>
            <Link to={`/${language}/blog`} activeClassName="is-active" className={`${styles.containerItem} navbar-item`}>Blog</Link>
            
            <Controls />
        </div>
    );
};

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

export default BurgerMenu;