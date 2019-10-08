// Core
import React from 'react';
import { Link } from 'gatsby';

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
                    <strong>Rejestracja</strong>
                </span>
            </MaterialButton>
            <MaterialButton onClick={onClick('login')}>
                <Link className="button is-outlined">Logowanie</Link>
            </MaterialButton>
        </div>
    );
};

export default Controls;