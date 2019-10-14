// Core
import React from "react"
import PropTypes from 'prop-types';

// Custom Components
import Message from './Message';
import Navbar from './Navbar';

// Stylesheet
import styles from './index.module.scss';

const Header = ({ omitExtendedHeader }) =>
  <header className={styles.container}>
    { omitExtendedHeader ? null : <Message /> }
    <Navbar />
  </header>

Header.propTypes = {
  omitExtendedHeader: PropTypes.bool
};

export default Header;
