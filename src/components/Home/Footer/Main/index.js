// Core
import React from 'react';
import { Link } from 'gatsby';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagram, faPinterestSquare, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';

// Custom Components
import Column from './Column';

// Stylesheet
import styles from './index.module.scss';

const Main= () => {
    const contactItems = [
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={`${styles.linkGroupedIconSpecial}`}/>
                <div className={styles.linkGroupedContent}>
                    <p className={`${styles.linkGroupedContentText} ${styles.spaced}`}>ul. Legnicka 57w B/C</p>
                    <p className={`${styles.linkGroupedContentText} ${styles.spaced}`}>54-203 Wroclaw</p>
                </div>
            </div>
        </Link>,
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faPhone} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>+14 244 071 035</p>
            </div>
        </Link>,
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>contact@hearaldbee.com</p>
            </div>
        </Link>,
        <p className={`${styles.text} ${styles.spaced}`}>KRS 0000750790</p>
    ];

    const resourceItems = [
        <Link to='/'><p className={styles.link}>Roadmapa</p></Link>,
        <Link to='/'><p className={styles.link}>Blog</p></Link>,
        <Link to='/'><p className={styles.link}>Alternatywa Cobiro</p></Link>,
        <Link to='/'><p className={styles.link}>Alternatywa AdNabu</p></Link>,
        <Link to='/'><p className={styles.link}>Alternatywa Adaplo</p></Link>,
        <Link to='/'><p className={styles.link}>Alternatywa AdScale</p></Link>,
        <Link to='/'><p className={styles.link}>Alternatywa StoreYa</p></Link>,
    ];

    const connectItems = [
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faFacebookSquare} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Facebook</p>
            </div>
        </Link>,
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faInstagram} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Instagram</p>
            </div>
        </Link>,
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faTwitterSquare} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Twitter</p>
            </div>
        </Link>,
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faPinterestSquare} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Pinterest</p>
            </div>
        </Link>,
        <Link to='/'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Linked-In</p>
            </div>
        </Link>
    ]

    return (
        <section className={`column is-7 is-6-widescreen is-offset-2-widescreen`}>
            <div className={`columns`}>
                <Column title="Dane Kontaktowe" listItems={contactItems}/>
                <Column title="Zasoby" listItems={resourceItems}/>
                <Column title="Połącz się z nami" listItems={connectItems}/>
            </div>
        </section>
    );
};

export default Main;