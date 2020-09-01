import React from 'react';
import { graphql } from 'gatsby';
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
  const villages = [
    ...data.villagesLoireAtlantique.edges,
    ...data.villagesVendee.edges,
  ];
  console.log(villages);

  return (
    <Layout>
      <SEO title="Scolaires" />
      <SectionWrapper>
        <TopSectionScolaires villages={villages} scolaires={true} />
        <FilteringSection events={events} scolaires={true} />
        <AboutFeatured />
        {logos.length > 0 && <LocalPartners logos={logos} />}
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
