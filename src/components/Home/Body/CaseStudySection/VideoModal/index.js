// Core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Third-Party Modules
import YouTube from 'react-youtube';

// Stylesheet
import styles from './index.module.scss';

const VideoModal = ({ isModalOpen, setIsModalOpen }) => {
    const player = document.getElementById('YouTubePlayer');

    useEffect(() => {
        if (isModalOpen && player) {
            player.playVideo();
        }
    }, [ isModalOpen, player ]);

    return (
        <div className={`${styles.container} ${isModalOpen ? styles.isOpen : ''}`} onClick={() => setIsModalOpen(false)}>
            <YouTube
                id="YouTubePlayer"
                videoId="kUk4m2n7ORk"
                containerClassName={styles.videoContainer}
                className={styles.videoPlayer}
            />
        </div>
    );
};

VideoModal.propTypes = {
    isModalOpen: PropTypes.bool,
    setIsModalOpen: PropTypes.func.isRequired
};

export default VideoModal;
