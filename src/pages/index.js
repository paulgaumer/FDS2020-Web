import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import About from '../components/sections/homepage/about';
import RegionMap from '../components/sections/homepage/regionMap';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <RegionMap />
  </Layout>
);

export default IndexPage;
