import React from 'react';
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
        <FilteringSection events={events} />
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
          department {
            name
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
