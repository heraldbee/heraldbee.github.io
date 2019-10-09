// Core
import React from 'React';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

// Stylesheet
import styles from './index.module.scss';
import MaterialButton from '../../../Material/MaterialButton';

const Message = () =>
    <aside className={`${styles.container}`}>
        <div className={styles.containerContent}>
            <p className={`${styles.text} is-size-7-mobile is-size-5-desktop`}>Dowiedz się jak możesz zautomatyzować swój sklep</p>
            <MaterialButton>
                <strong className={`${styles.button} button is-primary`}>
                    <FontAwesomeIcon className={styles.buttonIcon} icon={faBullhorn}/>
                    <p className={styles.buttonText}>Zgłoś się do nas</p>
                </strong>
            </MaterialButton>
        </div>
    </aside>

export default Message;