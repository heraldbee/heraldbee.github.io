import React from "react"

import LocaleContextProvider from "../../context/LocaleContext";
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const NotFoundPage = () => (
  <LocaleContextProvider locale="pl">
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </LocaleContextProvider>
)

export default NotFoundPage
