import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import TopSection from '../components/sections/eventsIndex/topSection';
import FilteringSection from '../components/sections/eventsIndex/filteringSection';
import AboutFeatured from '../components/sections/eventsIndex/featuredAboutSection';
import LocalPartners from '../components/sections/eventsIndex/localPartnersSection';

const EventsIndex = ({ data }) => {
  const events = data.allSanityEvent.edges.map(({ node }) => node);
  const department = data.sanityDepartment.name;
  const logos = data.logos.edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO title={department} />
      <SectionWrapper>
        <TopSection villages={data.villages.edges} department={department} />
        <FilteringSection events={events} department={department} />
        <AboutFeatured />
        {logos.length > 0 && <LocalPartners logos={logos} />}
      </SectionWrapper>
    </Layout>
  );
};

export default EventsIndex;

export const query = graphql`
  query($departmentId: String!) {
    allSanityEvent(
      filter: {
        department: { id: { eq: $departmentId } }
        education: { eq: false }
      }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          village {
            id
          }
          department {
            name
          }
          featured
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
            formatIcon {
              asset {
                fluid(maxWidth: 500) {
                  ...GatsbySanityImageFluid
                }
              }
            }
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
    sanityDepartment(id: { eq: $departmentId }) {
      name
    }
    logos: allSanityLogo(
      filter: { partners: { elemMatch: { id: { eq: $departmentId } } } }
    ) {
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
    villages: allSanityVillage(
      filter: { department: { id: { eq: $departmentId } } }
    ) {
      edges {
        node {
          id
          title
          _rawDescription
          description {
            children {
              text
            }
          }
          department {
            name
          }
          slug {
            current
          }
          startDate {
            local
          }
          endDate {
            local
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
