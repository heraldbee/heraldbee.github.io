// Core
import React from "react";

// Custom Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from '../components/Home/Body/HeroSection';
import FeaturedSection from '../components/Home/Body/FeaturedSection';
import DetailsSection from '../components/Home/Body/DetailsSection';
import CaseStudySection from '../components/Home/Body/CaseStudySection';
import StatisticsSection from '../components/Home/Body/StatisticsSection';
import PartnersSection from '../components/Home/Body/PartnersSection';

// Stylesheet
import './index.scss';

const IndexPage = () =>
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturedSection />
    <DetailsSection />
    <CaseStudySection />
    <StatisticsSection />
    <PartnersSection />
  </Layout>

export default IndexPage;
