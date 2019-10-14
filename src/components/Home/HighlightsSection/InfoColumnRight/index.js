// Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Third-Party Modules
import { faFlag, faCloudUploadAlt, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import HighlightsItem from '../../../CustomReusable/HighlightsItem';

// Stylesheet
import styles from './index.module.scss';

const InfoColumnRight = ({ isVisible }) => {

    const [ didAppear, setDidAppear ] = useState(false);

    useEffect(() => {
        if (isVisible && !didAppear) {
            setDidAppear(true);
        }
    }, [ isVisible, didAppear ]);

    return (
        <article className={`${styles.container} column is-6 is-4-desktop`}>
            <HighlightsItem
                didAppear={didAppear}
                delay={3}
                icon={faFlag}
                title="Raporty"
                description="Widok Lista Kampanii pokazuje wszystkie kampanie. Jeden klik w nazwę kampanii pozwala zobaczyć szczegóły."
            />
            <HighlightsItem
                didAppear={didAppear}
                delay={4}
                icon={faCloudUploadAlt}
                title="Przetwarzanie w chmurze"
                description="Korzyści z automatyzacji reklamy umożliwiają łatwe skalowanie biznesu."
            />
            <HighlightsItem
                didAppear={didAppear}
                delay={5}
                icon={faUniversalAccess}
                title="Dostępność"
                description="Nasza platforma jest dostępna dla każdego. Wystarczy kilka kliknięć, aby zacząć z niej korzystać."
            />
        </article>
    );
};

InfoColumnRight.propTypes = {
    didAppear: PropTypes.bool
};

export default InfoColumnRight;