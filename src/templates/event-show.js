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
  const scolaires = event.education;

  return (
    <Layout>
      <HeroSection event={event} scolaires={scolaires} />
      <DescriptionSection
        description={event._rawDescription}
        scolaires={scolaires}
      />
      {event.projectOwners.length > 0 && (
        <OrganizerSection
          organizer={event.projectOwners[0]}
          scolaires={scolaires}
        />
      )}
      {event.bookingRequired && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
          scolaires={scolaires}
        />
      )}
      <MapSection mapGps={event.map} scolaires={scolaires} />
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
      audience {
        id
        name
      }
      featured
      education
      _rawDescription
      bookingRequired
      bookingPhone
      bookingEmail
      startDate {
        local
      }
      endDate {
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
        formatIcon {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
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
        hotspot {
          x
          y
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
