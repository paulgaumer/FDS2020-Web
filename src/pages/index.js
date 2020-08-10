import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Header from '../components/header/header';
import HeroSection from '../components/sections/homepage/heroSection';
import AboutSection from '../components/sections/homepage/aboutSection';
import RegionMapSection from '../components/sections/homepage/regionMapSection';
import InstagramSection from '../components/sections/homepage/instagramSection';

const IndexPage = () => (
  <Layout headerHidden={true}>
    <SEO title="Home" />
    <HeroSection />
    <AboutSection />
    <RegionMapSection />
    <InstagramSection />
  </Layout>
);

export default IndexPage;
