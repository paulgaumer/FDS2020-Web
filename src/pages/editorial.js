import React from 'react';
import Layout from '../components/layout/layout';
import TopSection from '../components/sections/editoPage/topSection';
import PartnersSection from '../components/sections/editoPage/partnersSection';
import ContactSection from '../components/sections/editoPage/contactSection';

const editorial = ({ data }) => {
  const logos = data.logos.edges.map(({ node }) => node);

  return (
    <Layout>
      <TopSection />
      <PartnersSection logos={logos} />
      <ContactSection />
    </Layout>
  );
};

export default editorial;

export const query = graphql`
  query AllLogos {
    logos: allSanityLogo {
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
  }
`;
