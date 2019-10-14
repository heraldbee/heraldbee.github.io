// Core
import React from 'react';

// Third-Party Modules
import VisibilitySensor from 'react-visibility-sensor';

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
                <VisibilitySensor>
                    {
                        ({isVisible}) =>
                            <MediaColumn isVisible={isVisible}/>
                    }
                </VisibilitySensor>
                <VisibilitySensor>
                    {
                        ({isVisible}) =>
                            <>
                                <InfoColumnLeft isVisible={isVisible}/>
                                <InfoColumnRight isVisible={isVisible}/>
                            </>
                    }
                </VisibilitySensor>
            </div>
        </div>
    </section>

export default HighLightsSection;