// Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Third-Party Modules
import { faHeadset, faRobot, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import HighlightsItem from '../../../CustomReusable/HighlightsItem';

// Stylesheet
import styles from './index.module.scss';

const InfoColumnLeft = ({ isVisible }) => {

    const [ didAppear, setDidAppear ] = useState(false);

    useEffect(() => {
        if (isVisible && !didAppear) {
            setDidAppear(true);
        }
    }, [ isVisible, didAppear ]);

    return (
        <article className={`${styles.container} column is-6 is-4-desktop`}>
            <HighlightsItem
                isReversed
                didAppear={didAppear}
                delay={0}
                icon={faHeadset}
                title="Fantastyczne wsparcie ekspertów"
                description="Chcesz się dowiedzieć jak możemy Ci pomóc z Google Shopping?"
            />
            <HighlightsItem
                isReversed
                didAppear={didAppear}
                delay={1}
                icon={faRobot}
                title="SI Sztuczna Inteligencja"
                description="Stale testujemy i ulepszamy nasze algorytmy, które znacząco zwiększą Twoją sprzedaż."
            />
            <HighlightsItem
                isReversed
                didAppear={didAppear}
                delay={2}
                icon={faCoffee}
                title="Przyjazna użytkownikowi"
                description="Najłatwiejsza aplikacja na rynku."
            />
        </article>
    );
};

InfoColumnLeft.propTypes = {
    didAppear: PropTypes.bool
};

export default InfoColumnLeft;