// Core
import React, { useContext } from 'react';
import { Link } from 'gatsby';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagram, faPinterestSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Custom Modules
import { LocaleContext } from '../../../context/LocaleContext';
import { localizedPrefix } from '../../../utils/SharedUtils';

// Custom Components
import Column from './Column';

// Stylesheet
import styles from './index.module.scss';

const Main= () => {

    const { language } = useContext(LocaleContext);

    const contactItems = [
        <a target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/place/Legnicka+57w%2FB%2FC,+54-203+Wroc%C5%82aw/@51.124442,16.9854093,17z/data=!3m1!4b1!4m5!3m4!1s0x470fea0f4e4fffef:0xfbd8c5cbd913239a!8m2!3d51.124442!4d16.987598'>
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={`${styles.linkGroupedIconSpecial}`}/>
                <div className={styles.linkGroupedContent}>
                    <p className={`${styles.linkGroupedContentText} ${styles.spaced}`}>ul. Legnicka 57w B/C</p>
                    <p className={`${styles.linkGroupedContentText} ${styles.spaced}`}>54-203 Wroclaw</p>
                </div>
            </div>
        </a>,
        <a href="tel:+14244071035">
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faPhone} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>+14 244 071 035</p>
            </div>
        </a>,
        <a href="mailto:contact@hearaldbee.com">
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>contact@hearaldbee.com</p>
            </div>
        </a>,
        <p className={`${styles.text} ${styles.spaced}`}>KRS 0000750790</p>
    ];

    const resourceItems = [
        <Link to={`/${localizedPrefix(language)}upcoming-features-roadmap/`}><p className={styles.link}>Roadmapa</p></Link>,
        <Link to={`/${localizedPrefix(language)}blog/`}><p className={styles.link}>Blog</p></Link>,
        <Link to={`/${localizedPrefix(language)}cobiro-alternative/`}><p className={styles.link}>Alternatywa Cobiro</p></Link>,
        <Link to={`/${localizedPrefix(language)}adnabu-alternative/`}><p className={styles.link}>Alternatywa AdNabu</p></Link>,
        <Link to={`/${localizedPrefix(language)}adaplo-alternative/`}><p className={styles.link}>Alternatywa Adaplo</p></Link>,
        <Link to={`/${localizedPrefix(language)}adscale-alternative/`}><p className={styles.link}>Alternatywa AdScale</p></Link>,
        <Link to={`/${localizedPrefix(language)}storeya-alternative/`}><p className={styles.link}>Alternatywa StoreYa</p></Link>,
    ];

    const connectItems = [
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/heraldbee/">
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faFacebookSquare} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Facebook</p>
            </div>
        </a>,
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/heraldbee/">
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faInstagram} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Instagram</p>
            </div>
        </a>,
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/heraldbeeapp">
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faTwitterSquare} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Twitter</p>
            </div>
        </a>,
        <a target="_blank" rel="noopener noreferrer" href="https://pinterest.com./heraldbee/">
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faPinterestSquare} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Pinterest</p>
            </div>
        </a>,
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/heraldbee/">
            <div className={styles.linkGrouped}>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.linkGroupedIcon}/>
                <p className={`${styles.spaced}`}>Linked-In</p>
            </div>
        </a>
    ]

    return (
        <main className={`column is-7 is-6-widescreen is-offset-2-widescreen`}>
            <div className={`columns`}>
                <Column title="Dane Kontaktowe" listItems={contactItems}/>
                <Column title="Zasoby" listItems={resourceItems}/>
                <Column title="Połącz się z nami" listItems={connectItems}/>
            </div>
        </main>
    );
};

export default Main;