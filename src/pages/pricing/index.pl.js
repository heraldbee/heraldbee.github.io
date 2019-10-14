// Core
import React from 'react';

// Custom Components
import LocaleContextProvider from '../../context/LocaleContext';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PricingSection from '../../components/Pages/PricingSection';

const PricingPage = () =>
    <LocaleContextProvider locale="pl">
        <Layout omitExtendedHeader>
            <SEO title="Cennik"/>
            <PricingSection />
        </Layout>
    </LocaleContextProvider>

export default PricingPage;