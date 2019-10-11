// Core
import React from 'react';
import PropTypes from 'prop-types';

// Third-Party Modules
import YouTube from 'react-youtube';

// Stylesheet
import styles from './index.module.scss';

const VideoModal = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <div className={`${styles.container} ${isModalOpen ? styles.isOpen : ''}`} onClick={() => setIsModalOpen(false)}>
            <div className={`${styles.containerInner}`}>
                {
                    isModalOpen
                        ? (
                            <YouTube
                                id="YouTubePlayer"
                                videoId="kUk4m2n7ORk"
                                containerClassName={styles.videoContainer}
                                className={styles.videoPlayer}
                                opts={{
                                    height: '576',
                                    width: '1024',
                                    playerVars: {
                                        autoplay: 1
                                    }
                                }}
                            />
                        ) : null
                }
            </div>
        </div>
    );
};

VideoModal.propTypes = {
    isModalOpen: PropTypes.bool,
    setIsModalOpen: PropTypes.func.isRequired
};

export default VideoModal;
