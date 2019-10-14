// Core
import React from 'react';

// Custom Components
import LeftColumn from './Columns/LeftColumn';
import MiddleColumn from './Columns/MiddleColumn';
import RightColumn from './Columns/RightColumn';

// Stylesheet
import styles from './index.module.scss';

const FeaturedSection = () =>
    <section className={`${styles.container} section`}>
        <div className="container">
            <div className="columns">
                <LeftColumn />
                <MiddleColumn />
                <RightColumn />
            </div>
        </div>
    </section>

export default FeaturedSection;