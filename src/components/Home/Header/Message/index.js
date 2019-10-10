// Core
import React from 'React';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import Button from '../../../CustomReusable/Button';

// Stylesheet
import styles from './index.module.scss';

const Message = () =>
    <aside className={`${styles.container}`}>
        <div className={styles.containerContent}>
            <p className={`${styles.text} is-size-7-mobile is-size-5-desktop`}>Dowiedz się jak możesz zautomatyzować swój sklep</p>
            <Button>
                <FontAwesomeIcon className={styles.buttonIcon} icon={faBullhorn}/>
                <p className={styles.buttonText}>Zgłoś się do nas</p>
            </Button>
        </div>
    </aside>

export default Message;