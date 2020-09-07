import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../utils/portableTextSerializers';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';
import OnlineEventCard from '../components/sections/multimediaIndex/onlineEventCard';

const EventGrid = styled.div`
  grid-auto-rows: minmax(min-content, max-content);
`;

const Multimedia = ({ data }) => {
  const events = data.allSanityOnlineEvent.edges;
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
          <EventGrid
            data-name="events"
            className="flex flex-col space-y-6 md:space-y-0 md:grid-cols-1 md:grid md:gap-10 lg:grid-cols-2"
          >
            {events.length > 0 &&
              events.map(({ node }) => {
                return (
                  <div className="col-span-1" key={node.id}>
                    <OnlineEventCard event={node} />
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
          </EventGrid>
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
