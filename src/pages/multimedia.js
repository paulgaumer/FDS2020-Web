import React from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../utils/portableTextSerializers';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';
import OnlineEventCard from '../components/sections/multimediaIndex/onlineEventCard';
import { sortEventsByDate } from '../utils/processDate';
import MasonryGrid from '../components/global/masonryGrid';

const Multimedia = ({ data }) => {
  const rawEvents = data.allSanityOnlineEvent.edges.map(({ node }) => node);
  // const events = sortEventsByDate(rawEvents);
  const events = rawEvents;
  const { _rawContentBlock, topTitle } = data.sanityPage.pageContent[0];

  return (
    <Layout>
      <SEO title={topTitle} />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-40">
          <SectionTitle text={topTitle} />
          {_rawContentBlock && (
            <div className="pb-10 text-lg leading-7 tracking-wide text-gray-500 md:pb-16">
              <PortableText
                blocks={_rawContentBlock}
                serializers={serializers}
              />
            </div>
          )}
          <MasonryGrid data-name="events">
            {events.length > 0 &&
              events.map((event) => {
                return (
                  <div className="masonry-grid_item" key={event.id}>
                    <OnlineEventCard event={event} />
                  </div>
                );
              })}
            {events.length === 0 && (
              <div className="flex flex-col items-center justify-center col-span-2 p-10 space-y-6 text-xl text-center text-gray-500 border border-dotted rounded-md shadow-inner">
                <p className="text-3xl">
                  <FaSearch />
                </p>
                <p>Aucun événement n'a pour le moment été mis en ligne .</p>
              </div>
            )}
          </MasonryGrid>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default Multimedia;

export const query = graphql`
  query OnlineEvents {
    sanityPage(pageName: { eq: "Multimedia" }) {
      pageContent {
        ... on SanityMultimediaPageBlock {
          topTitle
          _rawContentBlock
        }
      }
    }
    allSanityOnlineEvent {
      edges {
        node {
          id
          title
          slug {
            current
          }
          summary
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
        }
      }
    }
  }
`;
