import React from 'react';
// import tw, { styled } from 'twin.macro';

import About from '../components/sections/homepage/about';
import RegionMap from '../components/sections/homepage/regionMap';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <RegionMap />
  </Layout>
);

export default IndexPage;
