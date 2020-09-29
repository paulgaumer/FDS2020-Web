import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Header from '../components/header/header';
import HeroSection from '../components/sections/homepage/heroSection';
import AboutSection from '../components/sections/homepage/aboutSection';
// import RegionMapSection from '../components/sections/homepage/regionMapSection';
import InstagramSection from '../components/sections/homepage/instagramSection';
import { hasWindow } from '../utils/hasWindow';
import HideNavOnScrollHook from '../utils/scrollNavHook';
const RegionMapSection = React.lazy(() =>
  import('../components/sections/homepage/regionMapSection')
);

const IndexPage = ({ data }) => {
  const {
    features,
    featuresButton,
    featuresTitle,
    instagramTitle,
    heroButton,
  } = data.sanityPage.pageContent[0];

  const [showHeader, setShowHeader] = useState(false);
  const [windowHeight, setWindowHeight] = useState(1414);
  const [lastYPos, setLastYPos] = useState(0);
  const [windowLoaded, setWindowLoaded] = useState(false);

  const handleScroll = (e) => {
    setLastYPos(window.scrollY);
  };

  // Define the height of the browsing window
  useEffect(() => {
    if (hasWindow) {
      setWindowHeight(window.innerHeight - 90);
      setWindowLoaded(true);
    }
  }, []);

  // Define event listener on scroll
  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Define when the nav should appear on screen
  useEffect(() => {
    if (lastYPos >= windowHeight) {
      setShowHeader(true);
    } else if (lastYPos <= 300) {
      setShowHeader(false);
    }
  }, [lastYPos]);

  return (
    <Layout headerHidden={true}>
      <SEO title="Accueil" />
      <div className={`${showHeader ? 'block' : 'hidden'}`}>
        <div className={`${HideNavOnScrollHook() ? 'hidden' : 'block'}`}>
          <Header />
        </div>
      </div>
      <HeroSection
        heroButton={heroButton}
        videoBackground={data.videoBackground}
      />
      <AboutSection
        features={features}
        featuresButton={featuresButton}
        featuresTitle={featuresTitle}
      />
      {windowLoaded && (
        <React.Suspense fallback={<div id="carte-accueil" />}>
          <RegionMapSection />
        </React.Suspense>
      )}
      <InstagramSection
        instagramTitle={instagramTitle}
        instagramSettings={data.instagram}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePage {
    sanityPage(pageName: { eq: "Homepage" }) {
      pageContent {
        ... on SanityHomePageBlock {
          features {
            image {
              asset {
                fluid(maxWidth: 500) {
                  ...GatsbySanityImageFluid
                }
              }
              hotspot {
                x
                y
              }
            }
            _rawFeature
            _key
          }
          featuresButton
          featuresTitle
          instagramTitle
          heroButton
        }
      }
    }
    instagram: sanitySiteSettings {
      instagramLink
      instagramHashtag
    }
    videoBackground: sanitySiteSettings {
      videoLink
      videoPlaceholder {
        asset {
          url
        }
      }
    }
  }
`;
