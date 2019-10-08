// Core
import React from 'react';
import { Link } from 'gatsby';

// Stylesheet
import styles from './index.module.scss';

const CallToAction = () => {
    return (
        <div className="column is-6 is-5-fullhd is-offset-1-fullhd">
            <div className="section-header">
                <h1 className="title is-spaced">Proste i całkowicie zautomatyzowane sklepy internetowe</h1>
                <h2 className="subtitle is-3">Przenieś swoją sprzedaż do internetu używając automatycznych rozwiązań dla e-commerce.</h2>
                <div className={styles.contentControls}>

                </div>
                <Link>Wykorzystaj nowe technologie internetowe</Link>
            </div>
        </div>
    );
};

export default CallToAction;