// Core
import React from "react"

// Custom Components
import Message from './Message';
import Navbar from './Navbar';

// Stylesheet
import styles from './index.module.scss';

const Header = () =>
  <header className={styles.container}>
    <Message />
    <Navbar />
  </header>

export default Header;
