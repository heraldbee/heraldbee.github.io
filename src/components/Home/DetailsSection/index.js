// Core
import React, { useState } from 'react';

// Custom Components
import DetailsColumn from './Columns/DetailsColumn';
import CarouselColumn from './Columns/CarouselColumn';

// Stylesheet
import styles from './index.module.scss';

const DetailsSection = () => {

    const [ activeTab, setActiveTab ] = useState(1);

    return (
        <section className={`${styles.container} section is-platform`}>
            <div className="container">
                <div className="columns">
                    <DetailsColumn  activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <CarouselColumn activeTab={activeTab}/>
                </div>
            </div>
        </section>
    );
};
    

export default DetailsSection;