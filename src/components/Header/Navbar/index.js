// Core
import React, { useState } from 'react';

// Custom Components
import Brand from './Brand';
import BurgerMenu from './BurgerMenu';

// Stylesheet
import styles from './index.module.scss';

const Navbar = () => {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const onMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${styles.container} navbar`} role="navigation" aria-label="main navigation">
            <Brand isActive={isMenuOpen} onToggle={onMenuToggle} />
            <BurgerMenu isOpen={isMenuOpen} />
        </nav>
    );
};

export default Navbar;