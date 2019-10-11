// Core
import React from 'react';

// Custom Components
import MediaColumn from './MediaColumn';
import InfoColumnLeft from './InfoColumnLeft';
import InfoColumnRight from './InfoColumnRight';

// Stylesheet
import styles from './index.module.scss';

const HighLightsSection = () =>
    <section className={`${styles.container} section`}>
        <div className={`container`}>
            <div className={`columns is-multiline`}>
                <MediaColumn />
                <InfoColumnLeft/>
                <InfoColumnRight/>
            </div>
        </div>
    </section>

export default HighLightsSection;