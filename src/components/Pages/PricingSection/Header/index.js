// Core
import React from 'react';

// Stylesheet
import styles from './index.module.scss';

const Header = () => {
    return (
        <div className={`${styles.container} container`}>
            <h1 className={`${styles.title} title is-size-2-desktop is-spaced is-family-secondary`}>Nasza oferta</h1>
            <h2 className={`${styles.subtitle} subtitle is-size-4 is-size-3-desktop`}>Znajdź pakiet dla siebie</h2>
            <div className={`${styles.description} container`}>
                <p className={`${styles.descriptionText}`}>
                    Jesteśmy technologicznym partnerem Google. Efektem tej współpracy jest aplikacja Heraldbee, która pozwala stworzyć reklamę Google Shopping dla sklepów internetowych osobom bez doświadczenia w marketingu. Dzięki aplikacji nawet osoba rozpoczynająca reklamowanie, zrobi to samodzielnie bez pomocy profesjonalnej agencji. Obsługujemy sklepy zbudowane na WooCommerce i Shopify.
                </p>
            </div>
        </div>
    );
};

export default Header;