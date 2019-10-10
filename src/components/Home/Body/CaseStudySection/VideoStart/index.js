// Core
import React from 'react';

// Third-Party Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// Stylesheet
import styles from './index.module.scss';

const VideoStart = ({ setIsModalOpen }) =>
    <div className={styles.container} role="button" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon className={styles.icon} icon={faPlayCircle}/>
        <div className={styles.circleInner}/>
        <div className={styles.circleMiddle}/>
        <div className={styles.circleOuter}/>
    </div>

export default VideoStart;