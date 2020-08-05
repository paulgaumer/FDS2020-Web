import React from 'react';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import TopSection from '../components/sections/eventsIndex/topSection';

const EventsIndex = ({ data }) => {
  return (
    <Layout>
      <SectionWrapper>
        <TopSection
          villages={data.villages.edges}
          department={data.sanityDepartment.name}
        />
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
            name
          }
          startDate(formatString: "DD MMMM YYYY, hh:mm", locale: "fr")
          endDate(formatString: "DD MMMM YYYY, hh:mm", locale: "fr")
          format {
            name
          }
          image {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
            alt
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
          }
        }
      }
    }
  }
`;
