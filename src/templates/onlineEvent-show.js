import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HeroSection from '../components/sections/multimediaShow/heroSection';
import DescriptionSection from '../components/sections/eventShow/descriptionSection';
import OrganizerSection from '../components/sections/eventShow/organizerSection';
import OpeningHours from '../components/sections/eventShow/openingHours';
import BookingSection from '../components/sections/eventShow/bookingSection';

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
        <OrganizerSection organizers={event.projectOwners} />
      )}
      {event.timeSlots.length > 1 && (
        <OpeningHours timeSlots={event.timeSlots} />
      )}
      {event.bookingRequired && !event.eventCanceled && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
          bookingWebsite={event.bookingWebsite}
          scolaires={false}
          bookingText="Réservations et inscriptions via le(s) lien(s) ci-dessous:"
        />
      )}
      {event.bookingRecommanded && !event.eventCanceled && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
          bookingWebsite={event.bookingWebsite}
          scolaires={false}
          bookingText="Réservations et inscriptions via le(s) lien(s) ci-dessous:"
        />
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
      bookingRequired
      bookingRecommanded
      bookingPhone
      bookingEmail
      bookingWebsite
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
