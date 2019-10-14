// Core
import React from 'react';

// Stylesheet
import styles from './index.module.scss';
import Header from './Header';
import Table from './Table';

const PricingSection = () => {
    return (
        <section className={`${styles.container} section`}>
            <Header />
            <Table />
        </section>
    );
};

export default PricingSection;