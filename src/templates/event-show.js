import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HeroSection from '../components/sections/eventShow/heroSection';
import DescriptionSection from '../components/sections/eventShow/descriptionSection';
import OrganizerSection from '../components/sections/eventShow/organizerSection';
import BookingSection from '../components/sections/eventShow/bookingSection';
import MapSection from '../components/sections/eventShow/mapSection';

const EventShow = ({ data }) => {
  const event = data.sanityEvent;

  return (
    <Layout>
      <HeroSection event={event} />
      <DescriptionSection description={event._rawDescription} />
      {event.projectOwners.length > 0 && (
        <OrganizerSection organizer={event.projectOwners[0]} />
      )}
      {event.bookingRequired && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
        />
      )}
      <MapSection mapGps={event.map} />
    </Layout>
  );
};

export default EventShow;

export const query = graphql`
  query($eventId: String!) {
    sanityEvent(id: { eq: $eventId }) {
      title
      department {
        name
      }
      featured
      _rawDescription
      bookingRequired
      bookingPhone
      bookingEmail
      endDate {
        local
      }
      startDate {
        local
      }
      projectOwners {
        name
        description
        website
        facebook
      }
      format {
        name
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
      }
      map {
        address
        lat
        lng
      }
    }
  }
`;
