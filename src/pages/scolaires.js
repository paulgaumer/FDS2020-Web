import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import TopSectionScolaires from '../components/sections/eventsIndex/topSectionScolaires';
import FilteringSection from '../components/sections/eventsIndex/filteringSection';
import AboutFeatured from '../components/sections/eventsIndex/featuredAboutSection';
import LocalPartners from '../components/sections/eventsIndex/localPartnersSection';
import { sortEventsByDate } from '../utils/processDate';

const EventsEducation = ({ data }) => {
  const rawEvents = data.allSanityEvent.edges.map(({ node }) => node);
  const events = sortEventsByDate(rawEvents);
  const page = data.sanityPage.pageContent[0];
  const logos = page.logosList;
  const villages = [
    ...data.villagesLoireAtlantique.edges,
    ...data.villagesVendee.edges,
  ];
  const { featuredTitle, featuredContent } = data.featured.pageContent[0];
  const { villageTitle, villageContent } = data.village.pageContent[0];

  return (
    <Layout>
      <SEO title="Scolaires" />
      <SectionWrapper>
        <TopSectionScolaires
          villages={villages}
          scolaires={true}
          topTitle={page.topTitle}
          villageTitle={villageTitle}
          villageContent={villageContent}
        />
        <FilteringSection events={events} scolaires={true} />
        <AboutFeatured
          featuredTitle={featuredTitle}
          featuredContent={featuredContent}
        />
        {logos.length > 0 && (
          <LocalPartners logos={logos} partnersTitle={page.partnersTitle} />
        )}
      </SectionWrapper>
    </Layout>
  );
};

export default EventsEducation;

export const query = graphql`
  fragment VillageInfo on SanityVillage {
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
    timeSlots {
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
          village {
            id
            title
          }
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
          }
          image {
            asset {
              fluid(maxWidth: 450) {
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
    sanityPage(pageName: { eq: "Scolaires" }) {
      pageContent {
        ... on SanityScolairesPageBlock {
          topTitle
          partnersTitle
          logosList {
            image {
              asset {
                fluid(maxWidth: 300) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
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
    villagesLoireAtlantique: allSanityVillage(
      filter: {
        department: { id: { eq: "-11736d2f-9de0-52c9-8564-f41c7d24a7fb" } }
      }
    ) {
      edges {
        node {
          ...VillageInfo
        }
      }
    }
    villagesVendee: allSanityVillage(
      filter: {
        department: { id: { eq: "-1d7f4055-1869-5334-942a-790614fd29d1" } }
      }
    ) {
      edges {
        node {
          ...VillageInfo
        }
      }
    }
  }
`;
