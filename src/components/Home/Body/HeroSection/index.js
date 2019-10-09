// Core
import React from 'react';

// Custom Components
import CallToAction from './CallToAction';
import HeroImage from './HeroImage'

// Stylesheet
import styles from './index.module.scss';

const HeroSection = () =>
    <section className={`${styles.container} section is-hero`}>
        <div className="container">
            <div className={`${styles.columns} columns`}>
                <CallToAction />
                <HeroImage />
            </div>
        </div>
    </section>

export default HeroSection;