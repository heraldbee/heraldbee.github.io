// Core
import React from 'react'

// Third-Party Modules
import VisibilitySensor from 'react-visibility-sensor';

// Custom Components
import StatItem from './StatItem';

// Stylesheet
import styles from './index.module.scss';

const Main = () =>
    <main className={`${styles.container} container`}>
        <VisibilitySensor>
            {
                ({ isVisible }) => 
                    <div className={`columns is-multiline`}>
                        <StatItem isVisible={isVisible} stat={21} description="Obsługiwanych krajów"/>
                        <StatItem isVisible={isVisible} stat={320} description="Użytkowników na świecie"/>
                        <StatItem isVisible={isVisible} stat={890} description="Wykonanych projektów"/>
                        <StatItem isVisible={isVisible} stat={112} description="Zrealizowanych usług"/>
                    </div>
            }
        </VisibilitySensor>
    </main>

export default Main;
