import React from 'react';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import TopSectionScolaires from '../components/sections/eventsIndex/topSectionScolaires';
import FilteringSection from '../components/sections/eventsIndex/filteringSection';
import AboutFeatured from '../components/sections/eventsIndex/featuredAboutSection';
import LocalPartners from '../components/sections/eventsIndex/localPartnersSection';

const EventsEducation = ({ data }) => {
  const events = data.allSanityEvent.edges.map(({ node }) => node);
  const logos = data.logos.edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO title="Scolaires" />
      <SectionWrapper>
        <TopSectionScolaires villages={data.villages.edges} scolaires={true} />
        <FilteringSection events={events} scolaires={true} />
        <AboutFeatured />
        {logos.length > 0 && <LocalPartners logos={logos} />}
      </SectionWrapper>
    </Layout>
  );
};

export default EventsEducation;

export const query = graphql`
  query AllEducation {
    allSanityEvent(filter: { education: { eq: true } }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          department {
            name
            id
          }
          featured
          village
          _rawDescription
          description {
            children {
              text
            }
          }
          theme {
            id
            name
          }
          startDate {
            local
          }
          endDate {
            local
          }
          format {
            id
            name
          }
          image {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
          audience {
            id
            name
          }
          map {
            address
            lng
            lat
          }
        }
      }
    }
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
    villages: allSanityEvent(filter: { village: { eq: true } }) {
      edges {
        node {
          id
          title
          featured
          _rawDescription
          description {
            children {
              text
            }
          }
          slug {
            current
          }
          department {
            name
          }
          startDate {
            local
          }
          endDate {
            local
          }
          theme {
            name
          }
          image {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
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
