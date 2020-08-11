import React from 'react';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import TopSection from '../components/sections/eventsIndex/topSection';
import FilteringSection from '../components/sections/eventsIndex/filteringSection';
import AboutFeatured from '../components/sections/eventsIndex/featuredAboutSection';

const EventsIndex = ({ data }) => {
  const events = data.allSanityEvent.edges.map(({ node }) => node);
  const department = data.sanityDepartment.name;

  return (
    <Layout>
      <SectionWrapper>
        <TopSection villages={data.villages.edges} department={department} />
        <FilteringSection events={events} department={department} />
        <AboutFeatured />
      </SectionWrapper>
    </Layout>
  );
};

export default EventsIndex;

export const query = graphql`
  query($departmentId: String!) {
    allSanityEvent(filter: { department: { id: { eq: $departmentId } } }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          featured
          village
          description
          theme {
            id
            name
          }
          startDate
          endDate
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
            alt
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
            lng
            lat
          }
        }
      }
    }
    sanityDepartment(id: { eq: $departmentId }) {
      name
    }
    villages: allSanityEvent(
      filter: {
        department: { id: { eq: $departmentId } }
        village: { eq: true }
      }
    ) {
      edges {
        node {
          id
          title
          featured
          description
          slug {
            current
          }
          startDate(formatString: "DD MMMM", locale: "fr")
          endDate(formatString: "DD MMMM", locale: "fr")
          theme {
            name
          }
          image {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
            alt
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
