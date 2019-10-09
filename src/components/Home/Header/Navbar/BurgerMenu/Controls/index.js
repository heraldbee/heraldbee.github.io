// Core
import React from 'react';

// Custom Components
import MaterialButton from '../../../../../Material/MaterialButton';

// Stylesheet
import styles from './index.module.scss';

const Controls = () => {
    const onClick = method => () => {
        window.location.href = `https://app.heraldbee.com/login${method === 'register' ? '?register=true' : ''}`;
    };

    return (
        <div className={`${styles.container} navbar-item`}>
            <MaterialButton onClick={onClick('register')}>
                <span className="button is-primary">
                    <p className={styles.text}><strong>Rejestracja</strong></p>
                </span>
            </MaterialButton>
            <MaterialButton onClick={onClick('login')}>
                <span className={`${styles.outlinedButton} button is-primary is-outlined`}>
                    <p className={styles.text}>Logowanie</p>
                </span>
            </MaterialButton>
        </div>
    );
};

export default Controls;