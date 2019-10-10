// Core
import React from 'react';
import PropTypes from 'prop-types';

// Custom Components
import MaterialButton from '../../Material/MaterialButton';

// Stylesheet
import styles from './index.module.scss';

const Button = ({ children }) =>
    <MaterialButton>
        <strong className={`${styles.button} button is-primary`}>
            {children}
        </strong>
    </MaterialButton>

Button.propTypes = {
    children: PropTypes.node.isRequired
};

export default Button;