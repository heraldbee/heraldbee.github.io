// Core
import React from 'react';
import PropTypes from 'prop-types';

// Custom Components
import Button from '../../../../CustomReusable/Button';

// Stylesheet
import styles from './index.module.scss';

const PricingColumn = ({ isHighlighted, perkList, title, price }) => {
    return (
        <div className={`${styles.container} column is-4`}>
            <header className={`${styles.header}`}>
                <div className={`${styles.headerHighlight} ${isHighlighted ? styles.headerHighlightIsActive : ''}`}>
                    <hr className={`${styles.headerHighlightDecorLeft}`}/>
                    <h5 className={`${styles.headerHighlightText}`}>Najbardziej popularny</h5>
                    <hr className={`${styles.headerHighlightDecorRight}`}/>
                </div>
                <div className={`${styles.headerContent}`}>
                    <h4 className={`${styles.headerContentSubtitle}`}>Pakiet Antyagencyjny</h4>
                    <h3 className={`${styles.headerContentTitle}`}>{title}</h3>
                    <p className={`${styles.headerContentPricing}`}>{price}</p>
                </div>
                <Button onClick={() => console.log('click')}>
                    <p className={`${styles.buttonText}`}>Skontaktuj się</p>
                </Button>
            </header>
            <main className={`${styles.main}`}>
                <ul className={`${styles.mainList}`}>
                    {
                        perkList.map((perk, i) => 
                            <li key={i} className={`${styles.mainListItem}`}>
                                <p className={`${styles.mainListItemText}`}>{perk}</p>
                            </li>
                        )
                    }
                </ul>
            </main>
        </div>
    );
};

PricingColumn.propTypes = {
    isHighlighted: PropTypes.bool,
    perkList: PropTypes.arrayOf([PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default PricingColumn;