// Core
import React from 'React';

// Stylesheet
import styles from './index.module.scss';
import MaterialButton from '../../../Material/MaterialButton';

const Message = () => {
    return (
        <aside className={`${styles.container}`}>
            <div className={styles.containerContent}>
                <p className={`${styles.text} is-size-7-mobile is-size-5-desktop`}>Dowiedz się jak możesz zautomatyzować swój sklep</p>
                <MaterialButton>
                    <strong className="button is-primary">Zgłoś się do nas</strong>
                </MaterialButton>
            </div>
        </aside>
    );
};

export default Message;