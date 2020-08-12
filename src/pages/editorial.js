import React from 'react';
import Layout from '../components/layout/layout';
import TopSection from '../components/sections/editoPage/topSection';
import PartnersSection from '../components/sections/editoPage/partnersSection';
import ContactSection from '../components/sections/editoPage/contactSection';

const editorial = ({ data }) => {
  const logos = data.allSanityLogo.edges.map(({ node }) => node);
  const ambassadors = data.allSanityAmbassador.edges.map(({ node }) => node);
  const {
    topTitle,
    topContent,
    partnersTitle,
    contactContent,
  } = data.sanityPage.pageContent;

  return (
    <Layout>
      <TopSection
        topTitle={topTitle}
        topContent={topContent}
        ambassadors={ambassadors}
      />
      <PartnersSection logos={logos} partnersTitle={partnersTitle} />
      <ContactSection contactContent={contactContent} />
    </Layout>
  );
};

export default editorial;

export const query = graphql`
  query EditoPage {
    allSanityLogo {
      edges {
        node {
          id
          name
          image {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
        }
      }
    }
    sanityPage(pageName: { eq: "Editorial" }) {
      pageContent {
        topTitle
        topContent
        partnersTitle
        contactContent
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
