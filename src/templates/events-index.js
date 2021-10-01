import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import TopSection from '../components/sections/eventsIndex/topSection';
import FilteringSection from '../components/sections/eventsIndex/filteringSection';
import FeaturedAboutFeatured from '../components/sections/eventsIndex/featuredAboutSection';
import LocalPartners from '../components/sections/eventsIndex/localPartnersSection';
import { sortEventsByDate } from '../utils/processDate';

const EventsIndex = ({ data }) => {
  const rawEvents = data.allSanityEvent.edges.map(({ node }) => node);
  console.log(rawEvents.length);
  const events = sortEventsByDate(rawEvents);
  const department = data.sanityDepartment.name;
  const logos = data.logos.edges.map(({ node }) => node);
  const { topTitle, partnersTitle } = data.sanityPage.pageContent[0];
  const { featuredTitle, featuredContent } = data.featured.pageContent[0];
  const { villageTitle, villageContent } = data.village.pageContent[0];

  return (
    <Layout>
      <SEO title={department} />
      <SectionWrapper>
        <TopSection
          villages={data.villages.edges}
          villageTitle={villageTitle}
          villageContent={villageContent}
          department={department}
          topTitle={topTitle}
        />
        <FilteringSection events={events} department={department} />
        <FeaturedAboutFeatured
          featuredTitle={featuredTitle}
          featuredContent={featuredContent}
        />
        {logos.length > 0 && (
          <LocalPartners logos={logos} partnersTitle={partnersTitle} />
        )}
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
      } # sort: { fields: startDate___local, order: ASC }
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
            title
          }
          department {
            name
          }
          featured
          eventCanceled
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
          timeSlots {
            endDate
            endTime
            startDate
            startTime
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
          audienceCustom {
            from
            to
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
    sanityPage(pageName: { eq: "Evénements par région" }) {
      pageContent {
        ... on SanityEventsIndexPageBlock {
          topTitle
          partnersTitle
        }
      }
    }
    featured: sanityPage(pageName: { eq: "Coups de Coeur" }) {
      pageContent {
        ... on SanityFeaturedBlock {
          featuredTitle
          featuredContent
        }
      }
    }
    village: sanityPage(pageName: { eq: "Village des Sciences" }) {
      pageContent {
        ... on SanityVillageBlock {
          villageContent
          villageTitle
        }
      }
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
      filter: { department: { id: { eq: $departmentId } } } # sort: { fields: startDate___local, order: ASC }
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
          eventCanceled
          timeSlots {
            _key
            endDate
            endTime
            startDate
            startTime
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
