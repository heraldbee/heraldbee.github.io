// Core
import React from 'react';

// Custom Components
import LocaleContextProvider from '../../context/LocaleContext';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const TermsOfServicePage = () =>
    <LocaleContextProvider locale="pl">
        <Layout omitExtendedHeader>
            <SEO title="Cennik"/>
        </Layout>
    </LocaleContextProvider>

export default TermsOfServicePage;