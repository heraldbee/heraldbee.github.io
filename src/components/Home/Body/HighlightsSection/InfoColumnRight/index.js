// Core
import React from 'react';

// Third-Party Modules
import { faFlag, faCloudUploadAlt, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import HighlightsItem from '../../../../CustomReusable/HighlightsItem';

// Stylesheet
import styles from './index.module.scss';

const InfoColumnRight = () =>
    <article className={`${styles.container} column is-6 is-4-desktop`}>
        <HighlightsItem
            icon={faFlag}
            title="Raporty"
            description="Widok Lista Kampanii pokazuje wszystkie kampanie. Jeden klik w nazwę kampanii pozwala zobaczyć szczegóły."
        />
        <HighlightsItem
            icon={faCloudUploadAlt}
            title="Przetwarzanie w chmurze"
            description="Korzyści z automatyzacji reklamy umożliwiają łatwe skalowanie biznesu."
        />
        <HighlightsItem
            icon={faUniversalAccess}
            title="Dostępność"
            description="Nasza platforma jest dostępna dla każdego. Wystarczy kilka kliknięć, aby zacząć z niej korzystać."
        />
    </article>

export default InfoColumnRight;