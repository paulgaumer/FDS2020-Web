import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Header from '../components/header/header';
import HeroSection from '../components/sections/homepage/heroSection';
import AboutSection from '../components/sections/homepage/aboutSection';
import RegionMapSection from '../components/sections/homepage/regionMapSection';
import InstagramSection from '../components/sections/homepage/instagramSection';
import { hasWindow } from '../utils/hasWindow';

const IndexPage = ({ data }) => {
  const {
    features,
    featuresButton,
    featuresTitle,
    instagramTitle,
  } = data.sanityPage._rawPageContent[0];

  const [showHeader, setShowHeader] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  const handleScroll = (e) => {
    setLastYPos(window.scrollY);
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('scroll', handleScroll);
      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (lastYPos >= 1414) {
      setShowHeader(true);
    } else if (lastYPos <= 300) {
      setShowHeader(false);
    }
  }, [lastYPos]);

  return (
    <Layout headerHidden={true}>
      <SEO title="Accueil" />
      <motion.div
        animate={{ opacity: showHeader ? 1 : 0 }}
        initial={{ opacity: showHeader ? 0 : 1 }}
        transition={{}}
      >
        <Header />
      </motion.div>
      <HeroSection />
      <AboutSection
        features={features}
        featuresButton={featuresButton}
        featuresTitle={featuresTitle}
      />
      <RegionMapSection />
      <InstagramSection instagramTitle={instagramTitle} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePage {
    sanityPage(pageName: { eq: "Homepage" }) {
      _rawPageContent
    }
  }
`;
