// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Third-Party Modules
import { Button } from '@material-ui/core';

const MaterialButton = ({ children, onClick }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};

export default MaterialButton;