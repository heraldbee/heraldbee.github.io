// Core
import React from 'react';

// Stylesheet
import styles from './index.module.scss';

const DetailsColumn = () => {
    return (
        <article className={`column is-6`}>
            <header className={`${styles.header}`}>
                <h2 className={`${styles.headerTitle} title is-family-secondary is-2 is-spaced`}>
                    <strong className={styles.headerTitleBold}>Heraldbee</strong> - Twój osobisty konfigurator rozwiązań dla e‑commerce
                </h2>
                <p className={`${styles.headerSubtitle} subtitle is-4`}>Zbudujemy sklep, który przyciągnie nowych klientów i nauczymy Cię nim zarządzać</p>
                <hr className="space is-2"/>
            </header>
            <body className={`${styles.body}`}>
                <div className={styles.bodyTabs}>
                    <ul>
                        <li className="is-active">
                            <div role="button" className={styles.bodyTabsElement} dataAnchor={1} href="#">
                                <h3 className={`title is-family-seconday is-4`}>Skonfigurujemy wszystko za Ciebie</h3>
                                <p className={`subtitle`}>Otrzymasz indywidalną grafikę sklepu. Dobierzemy najlepsze wtyczki i konfigurację. Regulamin. Polityka prywatności. RODO. Pokażemy Ci jakie to proste.</p>
                            </div>
                        </li>
                        <li>
                            <div role="button" className={styles.bodyTabsElement} dataAnchor={2} href="#">
                                <h3 className={`title is-family-seconday is-4`}>Usługi antyagencyjne</h3>
                                <p className={`subtitle`}>Zbudujemy Ci zautomatyzowane formy reklamy i nauczymy Cię nimi zarządzać. Nigdy reklama nie była taka prosta!</p>
                            </div>
                        </li>
                        <li>
                            <div role="button" className={styles.bodyTabsElement} dataAnchor={3} href="#">
                                <h3 className={`title is-family-seconday is-4`}>100% Twojego budżetu reklamowego trafia na reklamę</h3>
                                <p className={`subtitle`}>Nikt nie będzie pobierał prowizji za obsługę Twoich reklam.</p>
                            </div>
                        </li>
                        <li>
                            <div role="button" className={styles.bodyTabsElement} dataAnchor={4} href="#">
                                <h3 className={`title is-family-seconday is-4`}>Zaufaj ekspertom</h3>
                                <p className={`subtitle`}>Z nami zarządzanie sklepem będzie prostsze. Implementując aplikację Heraldbee dostaniesz dostęp do szerokiej bazy wiedzy, która pozwoli Ci rozwijać swój sklep.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </body>
        </article>
    );
};

export default DetailsColumn;