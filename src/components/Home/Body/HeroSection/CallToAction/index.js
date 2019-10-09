// Core
import React from 'react';
import { Link } from 'gatsby';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import MaterialButton from '../../../../Material/MaterialButton';

// Stylesheet
import styles from './index.module.scss';

const CallToAction = () =>
    <div className="column is-6 is-5-fullhd is-offset-1-fullhd">
        <div className="section-header">
            <h1 className="title is-size-2-desktop is-spaced is-family-secondary">Proste i całkowicie zautomatyzowane sklepy internetowe</h1>
            <h2 className={`${styles.contentSubtitle} subtitle is-size-4 is-size-3-desktop`}>Przenieś swoją sprzedaż do internetu używając automatycznych rozwiązań dla e-commerce.</h2>
            <div className={`${styles.contentControls} box`}>
                <MaterialButton>
                    <span className="button is-primary">
                        <p className={`${styles.contentControlsText}`}><strong>Chcę założyć sklep</strong></p>
                    </span>
                </MaterialButton>
                <MaterialButton>
                    <span className={`${styles.outlinedButton} button is-outlined is-primary`}>
                        <p className={`${styles.contentControlsText}`}>Chcę zautomatyzować swój sklep</p>
                    </span>
                </MaterialButton>
            </div>
            <Link className={styles.contentLink}><FontAwesomeIcon icon={faLightbulb}/> Wykorzystaj nowe technologie internetowe</Link>
        </div>
    </div>

export default CallToAction;