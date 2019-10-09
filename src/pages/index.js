// Core
import React from "react";
import { Link } from "gatsby";

// Custom Components
import Layout from "../components/layout";
import SEO from "../components/seo";

// Stylesheet
import './index.scss';

const IndexPage = () =>
  <Layout>
    <SEO title="Home" />
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>

export default IndexPage;
