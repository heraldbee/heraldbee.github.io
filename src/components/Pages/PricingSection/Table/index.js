// Core
import React from 'react';

// Custom Components
import PricingColumn from './PricingColumn';

// Stylesheet
import styles from './index.module.scss';

const Table = () => {
    const content = [
        {
            title: 'Na Dobry Start',
            price: '2990 zł x 6 miesięcy',
            perkList: [
                'Projekt Graficzny',
                'Konfiguracja wysyłek, płatności',
                'Automatyzacja Marketingu',
                '1 miesiąc reklamy',
                'Szkolenia z samodzielnej reklamy',
                'Szkolenia z zarządzenia sklepem'
            ]
        },
        {
            title: 'Zautomatyzuj Istniejący Sklep',
            price: '2990 zł x 3 miesięce',
            perkList: [
                `Automatyzacja Marketingu`,
                `1 miesiąc reklamy`,
                `Szkolenia z samodzielnej reklamy`
            ]
        },
        {
            title: 'Zoptymalizuj Sklep',
            price: '790 zł miesięcznie',
            perkList: [
                'Sprawny hosting',
                'Sprawna automatyzacja',
                'Gotowy Marketing',
                'Gwarancja najlepszych rozwiązań w Twoim sklepie',
                'Opieka techniczna i merytoryczna'
            ]
        },
    ];

    return (
        <div className={`${styles.container} container`}>
            <div className={`columns`}>
                {
                    content.map((column, i) =>
                        <PricingColumn key={i} title={column.title} price={column.price} perkList={column.perkList}/>
                    )
                }
            </div>
        </div>
    );
};

export default Table;