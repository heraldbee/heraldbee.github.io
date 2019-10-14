// Core
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import styles from './index.module.scss';
import Tab from './Tab';

const DetailsColumn = ({ activeTab, setActiveTab }) => {
    return (
        <article className={`column is-6`}>
            <header className={`${styles.header}`}>
                <h2 className={`${styles.headerTitle} title is-family-secondary is-size-3 is-size-2-desktop is-spaced`}>
                    <strong className={styles.headerTitleBold}>Heraldbee</strong> - Twój osobisty konfigurator rozwiązań dla e‑commerce
                </h2>
                <p className={`${styles.headerSubtitle} subtitle is-size-5 is-size-4-desktop`}>Zbudujemy sklep, który przyciągnie nowych klientów i nauczymy Cię nim zarządzać</p>
                <hr className="space is-2"/>
            </header>
            <main className={`${styles.body}`}>
                <div className={styles.container}>
                    <ul className={styles.tabs}>
                        <Tab
                            step={1}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            title="Skonfigurujemy wszystko za Ciebie"
                            description="Otrzymasz indywidalną grafikę sklepu. Dobierzemy najlepsze wtyczki i konfigurację. Regulamin. Polityka prywatności. RODO. Pokażemy Ci jakie to proste."
                        />
                        <Tab
                            step={2}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            title="Usługi antyagencyjne"
                            description="Zbudujemy Ci zautomatyzowane formy reklamy i nauczymy Cię nimi zarządzać. Nigdy reklama nie była taka prosta!"
                        />
                        <Tab
                            step={3}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            title="100% Twojego budżetu reklamowego trafia na reklamę"
                            description="Nikt nie będzie pobierał prowizji za obsługę Twoich reklam."
                        />
                        <Tab
                            step={4}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            title="Zaufaj ekspertom"
                            description="Z nami zarządzanie sklepem będzie prostsze. Implementując aplikację Heraldbee dostaniesz dostęp do szerokiej bazy wiedzy, która pozwoli Ci rozwijać swój sklep."
                        />
                    </ul>
                </div>
            </main>
        </article>
    );
};

DetailsColumn.propTypes = {
    activeTab: PropTypes.number.isRequired,
    setActiveTab: PropTypes.func.isRequired
};

export default DetailsColumn;