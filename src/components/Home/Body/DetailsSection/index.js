// Core
import React from 'react';

// Custom Components
import DetailsColumn from './Columns/DetailsColumn';
import CarouselColumn from './Columns/CarouselColumn';

// Stylesheet
import styles from './index.module.scss';

const DetailsSection = () =>
    <section className={`${styles.container} section is-platform`}>
        <div className="container">
            <div className="columns">
                <DetailsColumn />
                <CarouselColumn />
            </div>
        </div>
    </section>

export default DetailsSection;