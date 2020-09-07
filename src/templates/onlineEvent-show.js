import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HeroSection from '../components/sections/multimediaShow/heroSection';
import DescriptionSection from '../components/sections/eventShow/descriptionSection';
import OrganizerSection from '../components/sections/eventShow/organizerSection';
import OpeningHours from '../components/sections/eventShow/openingHours';

const EventShow = ({ data }) => {
  const event = data.sanityOnlineEvent;

  return (
    <Layout>
      <HeroSection event={event} />
      <DescriptionSection
        description={event._rawDescription}
        showCovidButton={false}
      />
      {event.projectOwners.length > 0 && (
        <OrganizerSection organizer={event.projectOwners[0]} />
      )}
      {event.timeSlots.length > 1 && (
        <OpeningHours timeSlots={event.timeSlots} />
      )}
    </Layout>
  );
};

export default EventShow;

export const query = graphql`
  query($eventId: String!) {
    sanityOnlineEvent(id: { eq: $eventId }) {
      title
      audience {
        id
        name
      }
      _rawDescription
      timeSlots {
        endDate
        endTime
        startDate
        startTime
      }
      projectOwners {
        name
        description
        website
        facebook
      }
      theme {
        id
        name
      }
      mediaUrl
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
`;
