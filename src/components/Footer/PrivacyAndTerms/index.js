// Core
import React, { useContext } from 'react';
import { Link } from 'gatsby';

// Custom Modules
import { LocaleContext } from '../../../context/LocaleContext';
import { localizedPrefix } from '../../../utils/SharedUtils';

// Stylesheet
import styles from './index.module.scss';

const PrivacyAndTerms = () => {
    
    const { language } = useContext(LocaleContext);
    
    return (
        <div className={`${styles.container} level`}>
            <Link to={`/${localizedPrefix(language)}privacy-policy/`}>
                <p className={styles.link}>Polityka Prywatności</p>
            </Link>
            <Link to={`/${localizedPrefix(language)}terms-of-service/`}>
                <p className={styles.link}>Warunki Świadczenia Usług</p>
            </Link>
        </div>
    );
};

export default PrivacyAndTerms;