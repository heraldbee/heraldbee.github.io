// Core
import React from 'react';

// Third-Party Modules
import { Button } from '@material-ui/core';

const MaterialButton = ({ children, onClick }) =>
    <Button onClick={onClick}>
        {children}
    </Button>

export default MaterialButton;