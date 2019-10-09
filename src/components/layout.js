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
import Header from "./Home/Header";

// Stylesheet
import "./layout.css";
import styles from './layout.module.scss';

const Layout = ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <section>
        <main className={styles.wrapper}>{children}</main>
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
