// Core
import React from 'react';

// Custom Components
import Button from '../../../../CustomReusable/Button';

// Stylesheet
import styles from './index.module.scss';

const Controls = () => {
    const onClick = method => () => {
        window.location.href = `https://app.heraldbee.com/login${method === 'register' ? '?register=true' : ''}`;
    };

    return (
        <div className={`${styles.container} navbar-item`}>
            <Button onClick={onClick('register')}>
                <p className={styles.text}>Rejestracja</p>
            </Button>
            <Button onClick={onClick('login')} isInverted>
                <p className={styles.text}>Logowanie</p>
            </Button>
        </div>
    );
};

export default Controls;