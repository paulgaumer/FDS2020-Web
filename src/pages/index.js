import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Header from '../components/header/header';
import HeroSection from '../components/sections/homepage/heroSection';
import AboutSection from '../components/sections/homepage/aboutSection';
import RegionMapSection from '../components/sections/homepage/regionMapSection';
import InstagramSection from '../components/sections/homepage/instagramSection';
import { hasWindow } from '../utils/hasWindow';

const HeaderContainer = styled.div`
  &.headerVisibleTransition {
    margin-top: 0px;
    transition: all 0.3s ease-in;
  }
  &.headerHiddenTransition {
    margin-top: -100px;
    transition: all 0.3s ease-out;
  }
`;

const IndexPage = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    setScrollPosition(window.scrollY);
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
    scrollPosition >= 305 ? setShowHeader(true) : setShowHeader(false);
  }, [scrollPosition]);

  return (
    <Layout headerHidden={true}>
      <HeaderContainer
        className={`${
          showHeader ? 'headerVisibleTransition' : 'headerHiddenTransition'
        }`}
      >
        <Header />
      </HeaderContainer>
      <SEO title="Home" />
      <HeroSection />
      <AboutSection />
      <RegionMapSection />
      <InstagramSection />
    </Layout>
  );
};

export default IndexPage;
