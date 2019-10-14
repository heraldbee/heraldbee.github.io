// Core
import React from 'react';
import PropTypes from 'prop-types';

// Custom Components
import MaterialButton from '../../Material/MaterialButton';

// Stylesheet
import styles from './index.module.scss';

const Button = ({ children, isInverted, onClick }) => {
    const buttonClasses = `${styles.button} button is-primary`;
    const invertedClasses = `${styles.button} button is-primary is-outlined`;

    return (
        <MaterialButton onClick={onClick}>
            <strong className={isInverted ? invertedClasses : buttonClasses}>
                {children}
            </strong>
        </MaterialButton>
    );
};
    

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isInverted: PropTypes.bool
};

export default Button;