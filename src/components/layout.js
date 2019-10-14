/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// Core
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

// Custom Components
import Header from './Home/Header';
import Footer from './Home/Footer';

// Stylesheet
import "./layout.css";
import styles from './layout.module.scss';

const Layout = ({ children, omitExtendedHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <section className={styles.wrapper}>
      <Header siteTitle={data.site.siteMetadata.title} omitExtendedHeader={omitExtendedHeader} />
      <section>
        <main>{children}</main>
      </section>
      <Footer />
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  omitExtendedHeader: PropTypes.bool
}

export default Layout
