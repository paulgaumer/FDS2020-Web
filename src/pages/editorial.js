import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import TopSection from '../components/sections/editoPage/topSection';
import PartnersSection from '../components/sections/editoPage/partnersSection';
import ContactSection from '../components/sections/editoPage/contactSection';
import CarouselSection from '../components/sections/editoPage/carouselSection';

const editorial = ({ data }) => {
  const ambassadors = data.allSanityAmbassador.edges.map(({ node }) => node);
  const {
    topTitle,
    partnersTitle,
    organizersTitle,
    logosOrganizers,
    coordinationTitle,
    logosCoordination,
    contactContent,
    _rawTopContent,
    previousEditions,
  } = data.sanityPage.pageContent[0];

  return (
    <Layout>
      <SEO title="Editorial" />
      <TopSection
        topTitle={topTitle}
        topContent={_rawTopContent}
        ambassadors={ambassadors}
      />
      <PartnersSection
        logosOrganizers={logosOrganizers}
        organizersTitle={organizersTitle}
        coordinationTitle={coordinationTitle}
        logosCoordination={logosCoordination}
        partnersTitle={partnersTitle}
      />
      <ContactSection contactContent={contactContent} />
      <CarouselSection previousEditions={previousEditions} />
    </Layout>
  );
};

export default editorial;

export const query = graphql`
  query EditoPage {
    sanityPage(pageName: { eq: "Editorial" }) {
      pageContent {
        ... on SanityEditorialPageBlock {
          logosOrganizers {
            image {
              asset {
                id
                fluid(maxWidth: 500) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            name
          }
          topTitle
          _rawTopContent
          partnersTitle
          organizersTitle
          coordinationTitle
          contactContent
          logosCoordination {
            image {
              asset {
                id
                fluid(maxWidth: 500) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            name
          }
          previousEditions {
            asset {
              id
              url
            }
            caption
            alt
          }
        }
      }
    }
    allSanityAmbassador {
      edges {
        node {
          id
          name
          role
          _rawTestimony
          image {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
              url
            }
            hotspot {
              x
              y
            }
          }
        }
      }
    }
  }
`;
