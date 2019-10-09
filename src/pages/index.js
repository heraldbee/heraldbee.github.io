// Core
import React from "react";

// Custom Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from '../components/Home/Body/HeroSection';
import FeaturedSection from '../components/Home/Body/FeaturedSection';

// Stylesheet
import './index.scss';

const IndexPage = () =>
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturedSection />
  </Layout>

export default IndexPage;
