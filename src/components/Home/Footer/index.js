// Core
import React from 'react';

// Custom Components
import Aside from './Aside';
import Main from './Main';

// Stylesheet
import styles from './index.module.scss';

const Footer = () =>
    <footer className={`${styles.container} section`}>
        <div className={`container`}>
            <div className={`columns`}>
                <Aside />
                <Main />
            </div>
        </div>
    </footer>

export default Footer;