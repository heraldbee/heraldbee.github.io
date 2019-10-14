// Core
import React from "react";

// Custom Components
import LocaleContextProvider from '../context/LocaleContext';
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from '../components/Home/HeroSection';
import FeaturedSection from '../components/Home/FeaturedSection';
import DetailsSection from '../components/Home/DetailsSection';
import CaseStudySection from '../components/Home/CaseStudySection';
import StatisticsSection from '../components/Home/StatisticsSection';
import HighLightsSection from '../components/Home/HighlightsSection';
import PartnersSection from '../components/Home/PartnersSection';

// Stylesheet
import './index.scss';

const IndexPage = () =>
    <LocaleContextProvider locale="en">
        <Layout>
        <SEO title="Home" />
        <HeroSection />
        <FeaturedSection />
        <DetailsSection />
        <CaseStudySection />
        <StatisticsSection />
        <HighLightsSection />
        <PartnersSection />
        </Layout>
    </LocaleContextProvider>

export default IndexPage;
