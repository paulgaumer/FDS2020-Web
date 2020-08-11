import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Header from '../components/header/header';
import HeroSection from '../components/sections/homepage/heroSection';
import AboutSection from '../components/sections/homepage/aboutSection';
import RegionMapSection from '../components/sections/homepage/regionMapSection';
import InstagramSection from '../components/sections/homepage/instagramSection';
import { hasWindow } from '../utils/hasWindow';

const IndexPage = () => {
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
      <SEO title="Home" />
      <motion.div
        animate={{ opacity: showHeader ? 1 : 0 }}
        initial={{ opacity: showHeader ? 0 : 1 }}
        transition={{}}
      >
        <Header />
      </motion.div>
      <HeroSection />
      <AboutSection />
      <RegionMapSection />
      <InstagramSection />
    </Layout>
  );
};

export default IndexPage;
