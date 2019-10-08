// Core
import React from "react"

// Custom Components
import Message from './Message';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

// Stylesheet
import styles from './index.module.scss';

const Header = () =>
  <header className={styles.container}>
    <Message />
    <Navbar />
    <HeroSection />
  </header>

export default Header;
