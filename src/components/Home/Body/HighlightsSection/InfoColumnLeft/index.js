// Core
import React from 'react';

// Third-Party Modules
import { faHeadset, faRobot, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import HighlightsItem from '../../../../CustomReusable/HighlightsItem';

// Stylesheet
import styles from './index.module.scss';

const InfoColumnLeft = () =>
    <article className={`${styles.container} column is-6 is-4-desktop`}>
        <HighlightsItem
            isReversed
            icon={faHeadset}
            title="Fantastyczne wsparcie ekspertów"
            description="Chcesz się dowiedzieć jak możemy Ci pomóc z Google Shopping?"
        />
        <HighlightsItem
            isReversed
            icon={faRobot}
            title="SI Sztuczna Inteligencja"
            description="Stale testujemy i ulepszamy nasze algorytmy, które znacząco zwiększą Twoją sprzedaż."
        />
        <HighlightsItem
            isReversed
            icon={faCoffee}
            title="Przyjazna użytkownikowi"
            description="Najłatwiejsza aplikacja na rynku."
        />
    </article>

export default InfoColumnLeft;