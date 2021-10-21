import * as React from "react";
import Seo from "../components/SEO/SEO";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import CTAArea from "../components/CTAArea/CTAArea";
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CTAArea />
  </Layout>
);

export default IndexPage;
