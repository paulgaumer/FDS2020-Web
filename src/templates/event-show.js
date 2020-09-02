import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HeroSection from '../components/sections/eventShow/heroSection';
import VillageLinkSection from '../components/sections/eventShow/villageLinkSection';
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
      {event.village && <VillageLinkSection event={event} />}
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
          bookingText="Attention, cet évenement est uniquement accessible sur réservation!"
        />
      )}
      {event.bookingRecommanded && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
          scolaires={scolaires}
          bookingText="Attention, il est recommandé de réserver à l'avance pour cet évenement!"
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
      village {
        id
        title
        slug {
          current
        }
        department {
          name
        }
      }
      education
      _rawDescription
      bookingRequired
      bookingRecommanded
      bookingPhone
      bookingEmail
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
